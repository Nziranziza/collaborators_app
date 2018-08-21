import { Mongo } from 'meteor/mongo';
 
export const Userdata = new Mongo.Collection('userdata');
export const Personalinfo= new Mongo.Collection('personinfo');
export const Familyinfo=new Mongo.Collection('familyinfo');
export const Contactinfo=new Mongo.Collection('contactinfo');
export const Educationinfo=new Mongo.Collection('educationinfo');
export const Biography=new Mongo.Collection('biography');
export const Languages=new Mongo.Collection('languages');
//Publishing the collection
if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('userdata', function userdataPublication() {
        return Userdata.find();
      });
  
  Meteor.publish('personalInfo', function personInfoPublication() {
    return Personalinfo.find({Accid: this.userId});
  });
Meteor.publish('familyInfo', function familyInfoPublication() {
    return Familyinfo.find({id: this.userId});
  });

Meteor.publish('contactInfo', function contactInfoPublication() {
    return Contactinfo.find({id: this.userId});
  });

Meteor.publish('educationInfo', function educactionInfoPublication() {
    return Educationinfo.find({id: this.userId});
  });

Meteor.publish('biography',function biographyPublication(){
    return Biography.find({id:this.userId});
});
Meteor.publish('languages',function languegesPublication(){
    return Languages.find({id:this.userId});
})
}

//adding methods to handle insecure 
Meteor.methods({
    //adding a new Job Post
    addJobPost(job,title){ 
    Userdata.insert({Jobdata:
               {post: job,
                createdAt: new Date(),
                published: false,
                user: Meteor.user().username,
                title:title
            }}
        
    );
    },
    // deleting a Job Post
    deleteJobPost(id){
      Userdata.remove(id);
    },
    //Publishing a Job Post
    publishJobPost(id,status){
      Userdata.update(id,{
          $set:{Jobdata:{
              publish:!status
          }
        }
      });
    },
    //adding Personal information
    addPersonalInfo(fn,mn,ln,gd,status,bd,nation,cob,id){
        Personalinfo.insert({
           fname:fn,
           mname:mn,
           lname:ln,
           gender:gd,
           status:status,
           bd:bd,
           nation:nation,
           countryb:cob,
           id:id,
           Accid:Meteor.userId()
        })
    },
    // editing personal information
    editPersonalInfo(dataid,fn,mn,ln,gd,status,bd,nation,cob,id){
        Personalinfo.update(dataid,{
            $set: {
            fname:fn,
            mname:mn,
            lname:ln,
            gender:gd,
            status:status,
            bd:bd, 
            nation:nation,
            countryb:cob,
            id:id,}
         })
    },
    //enabling edit for personal information
    enableEdit(id){
        Personalinfo.update(id,{
            $set:{
                edit:true
            }
        })
    },
    //disabling edit fro personal information 
    disableEdit(id){
        Personalinfo.update(id,{
            $set:{
                edit:false
            }
        })
    },
    //adding family information
    addFamilyInfo(father,mother,siblings,tincome){
        Familyinfo.insert({
            father:father,
            mother:mother,
            siblings:siblings,
            tincome:tincome,
            id:Meteor.userId()
        })
    },
    //editing family information
    editFamilyInfo(id,father,mother,siblings,tincome){
        Familyinfo.update(id,{
            $set:{
                father:father,
                mother:mother,
                siblings:siblings,
                tincome:tincome
            }

        })
    },
    //adding contact information
    addContactInfo(country,province,district,sector,cell,village,phone,email,social){
        Contactinfo.insert({
         country:country,
         province:province,
         district:district,
         sector:sector,
         cell:cell,
         village:village,
         phone:phone,
         email:email,
         social:social,
         id:Meteor.userId()
        })
    },
    //editing contact information
    editContactInfo(id,country,province,district,sector,cell,village,phone,email,social){
        Contactinfo.update(id,{
            $set:{
                country:country,
                province:province,
                district:district,
                sector:sector,
                cell:cell,
                village:village,
                phone:phone,
                email:email,
                social:social, 
            }
        })
    },
    //adding education information 
    addEducationInfo(mcountry,mdistrict,mschool,mstatus,mstart,mend,mgrade,hcountry,hdistrict,hschool,hstatus,hstart,hend,hgrade,hmajor,bcountry,bdistrict,university,faculty,department,bstatus,bstart,bend,bgrade){
        Educationinfo.insert({
            // middle school information
            mcountry:mcountry,
            mdistrict:mdistrict,
            mschool:mschool,
            mstatus:mstatus,
            mstart:mstart,
            mend:mend,
            mgrade:mgrade,
            //High school information
            hcountry:hcountry,
            hdistrict:hdistrict,
            hschool:hschool,
            hstatus:hstatus,
            hstart:hstart,
            hend:hend,
            hagrade:hgrade,
            hmajor:hmajor,
            //Bachelor's Degree information
            bcountry:bcountry,
            bdistrict:bdistrict,
            university:university,
            faculty:faculty,
            department:department,
            bstatus:bstatus,
            bstart:bstart,
            bend:bend,
            bgrade:bgrade,
            id:Meteor.userId()
        })
    },
    editEducationInfo(id,mcountry,mdistrict,mschool,mstatus,mstart,mend,mgrade,hcountry,hdistrict,hschool,hstatus,hstart,hend,hgrade,hmajor,bcountry,bcity,university,faculty,department,bstatus,bstart,bend,bgrade){
        Educationinfo.update(id,{
            $set:{ 
             // middle school information
             mcountry:mcountry,
             mdistrict:mdistrict,
             mschool:mschool,
             mstatus:mstatus,
             mstart:mstart,
             mend:mend,
             mgrade:mgrade,
             //High school information
             hcountry:hcountry,
             hdistrict:hdistrict,
             hschool:hschool,
             hstatus:hstatus,
             hstart:hstart,
             hend:hend,
             hagrade:hgrade,
             hmajor:hmajor,
             //Bachelor's Degree information
             bcountry:bcountry,
             bcity:bcity,
             university:university,
             faculty:faculty,
             department:department,
             bstatus:bstatus,
             bstart:bstart,
             bend:bend,
             bgrade:bgrade,
            }
        })
    },
//Adding Biography
addBiography(text){
    Biography.insert({
        biotext:text,
        id:Meteor.userId()
    })
},
//Add language
addLanguage(lang,level){
    Languages.insert({
        lang:lang,
        level:level,
        id:Meteor.userId()
    })
}


});

