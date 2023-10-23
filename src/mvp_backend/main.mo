import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Buffer "mo:base/Buffer";
import Hash "mo:base/Hash";
import Order "mo:base/Order";

actor {

  //TYPES//

  //Supporting TYPES//

  type Gender = {
    #Male;
    #Female;
    #Other
  };

  type BloodType = {
    #APositive;
    #ANegative;
    #BPositive;
    #BNegative;
    #OPositive;
    #ONegative;
    #ABPositive;
    #ABNegative;

  };

  type Service = {
    name: Text;
    description: Text;
    category: Text;
  };

  type ServiceAvailability = {
    service: Service;
    availableQuantity: Nat;
    unit: Text;
    price: Nat;
    deliveryTime: Nat;
  };

  type ServiceStatus = {
    #Ordered;
    #Processing;
    #Delivered;
  };

  type ServiceOrder = {
    service: Service;
    userPrincipal: Principal;
    facilityPrincipal: Principal;
    status : ServiceStatus;
    quantity: Nat;
    orderTime: Nat;
    charge: Nat;
  };

  type MeetingAvailability = {
    name: Text;
    occupation: Text;
    description: Text;
    startTime: Nat;
    endTime: Nat;
    charge: Nat;
  };

  type Meeting = {
    user: Text;
    professional: Text;
    appointmentTime: Nat;
    charge: Nat;
    meetingLink: Text;
  };

  type IDLinkProfessional = {
    ID: Text;
    professional: Professional;
  };

  type IDLinkFacility = {
    ID: Text;
    facility: Facility;
  };

  type IDLinkServiceAvailability = {
    ID: Text;
    serviceAvailability: ServiceAvailability;
  };

  type IDLinkMeetingAvailability = {
    ID: Text;
    meetingAvailability : MeetingAvailability;
  };

  type IDLinkServiceOrder ={
    ID: Text;
    orderArray : [ServiceOrder];
  };                          

  //Supporting TYPES//

  //USER TYPES

  type User = {
    Username: Text;
    Name: Text;
    DOB: Nat;
    Country: Text;
    State: Text;
    District: Text;
    Pincode: Nat;
    Gender: Gender;
    BloodType : BloodType;
    Height: Nat16;
    Weight: Nat16;
  };

  type Professional = {
    Username: Text;
    Name: Text;
    DOB: Nat;
    Country: Text;
    State: Text;
    District: Text;
    Pincode: Nat;
    Gender: Gender;
    BloodType : BloodType;
    Height: Nat16;
    Weight: Nat16;
    Occupation: Text;
    CertificationID : Text;
    Company: Text;
  };

  type Facility = {
    Username: Text;
    FacilityName: Text;
    Country: Text;
    State: Text;
    District: Text;
    Pincode: Nat;
    RegistrationID: Text;
    Service: Service;
  };

  // USER TYPES

  // TYPES//

  var admin : Principal = Principal.fromText("lkzyl-sk5hn-2uhw6-pqjgr-kazs5-aohv3-4yedu-cwuxm-b2n7w-xyhcn-nqe");
  let AllUserLists = HashMap.HashMap<Principal, Nat>(0, Principal.equal, Principal.hash);
  var AllUserNumber = 0;

  //USER SECTION

  var totalHealthUsers : Nat = 0;
  let HealthUsers = HashMap.HashMap<Principal, User>(0, Principal.equal, Principal.hash);
  //USER SECTION
  
  //PROFESSIONAL SECTION

  var totalHealthProfessionals : Nat = 0;
  let HealthProfessionals = HashMap.HashMap<Principal, Professional>(0, Principal.equal, Principal.hash);

  var totalApprovedProfessionals : Nat = 0;
  let ApprovedProfessionals = HashMap.HashMap<Principal, Professional>(0, Principal.equal, Principal.hash);

  // var totalAvailableProfessionals : Nat = 0;
  // let AvaliableProfessionals = HashMap.HashMap<Principal, Professional>(0, Principal.equal, Principal.hash);

  var totalAvailableServiceProfessionals: Nat = 0;
  let AvailableServicesProfessionals = HashMap.HashMap<Principal, MeetingAvailability>(0, Principal.equal, Principal.hash);

  var totalMeetings: Nat = 0;
  let Meetings = HashMap.HashMap<Principal, HashMap.HashMap<Principal, [Meeting]>>(0, Principal.equal, Principal.hash);

  //PROFESSIONAL SECTION

  //FACILITIES SECTION

  var totalHealthFacilities : Nat = 0;
  let HealthFacilities = HashMap.HashMap<Principal, Facility>(0, Principal.equal, Principal.hash);

  var totalApprovedFacilities : Nat = 0;
  let ApprovedFacilities = HashMap.HashMap<Principal, Facility>(0, Principal.equal, Principal.hash);

  var totalAvailableServiceFacilities: Nat = 0;
  let AvailableServicesFacilities = HashMap.HashMap<Principal, ServiceAvailability>(0, Principal.equal, Principal.hash);

  var totalOrders: Nat = 0;
  let Orders = HashMap.HashMap<Principal, HashMap.HashMap<Principal, [ var ServiceOrder]>>(0, Principal.equal, Principal.hash);

  //FACILITIES SECTION

  //USER CRUD SECTION STARTS

  public shared({caller}) func createUser(user: User): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous persons can't register, please login with wallet or internet identity");
    };
    if(null != AllUserLists.get(caller)){
      return #err( "You are already registered with this platform");
    };
    AllUserLists.put(caller, (AllUserLists.size() + 1 ));
    HealthUsers.put(caller, user);
    totalHealthUsers := totalHealthUsers + 1;
    #ok("You are registered as user number: " # Int.toText(totalHealthUsers));
  };

  public shared({caller}) func readUser(): async Result.Result<User, Text>{

    if(Principal.isAnonymous(caller)){
     return #err("Anonymous person not registered, please login with wallet or internet identity");
    };

    let tempUser = HealthUsers.get(caller);

    switch(tempUser) {
      case(?tempuser) { #ok(tempuser)};
      case(null) { #err("Either you are not registered or some error occured")};
    };
  };

  public shared({caller}) func updateUser(user: User): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let updatedTempUser = HealthUsers.replace(caller, user);
    switch(updatedTempUser){
      case(?updatedtempuser) {#ok("Your data updated successfully");};
      case(null) {#err("Either you are not registered or some error occured")};
    }
  };

  public shared({caller}) func deleteUser(): async Result.Result<Text, Text> {
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    HealthUsers.delete(caller);
    totalHealthUsers := totalHealthUsers - 1;
    #ok("Your data deleted successfully");
  };

  //USER CRUD SECTION ENDS

  //PROFESSIONAL CRUD SECTION STARTS

  public shared({caller}) func createProfessional(professional: Professional): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous persons can't register, please login with wallet or internet identity");
    };
    if(null != AllUserLists.get(caller)){
      return #err( "You are already registered with this platform");
    };
    AllUserLists.put(caller, (AllUserLists.size() + 1 ));
    HealthProfessionals.put(caller, professional);
    totalHealthProfessionals := totalHealthProfessionals + 1;
    #ok( "You are registered as professional number: " # Int.toText(totalHealthProfessionals ));
  };

  public shared({caller}) func readProfessional(): async Result.Result<Professional, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };

    let tempProfessional = HealthProfessionals.get(caller);

    switch(tempProfessional) {
      case(?tempprofessional) { #ok(tempprofessional); };
      case(null) {  
        let temp = ApprovedProfessionals.get(caller);
        switch(temp) {
          case(?value) { 
            #ok(value); 
          };
          case(null) { 
            #err("You are not registered");
          };
        };
      };
    };
    
 };

  public shared({caller}) func updateProfessional(professional: Professional): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let updatedTempProfessional = HealthProfessionals.replace(caller, professional);
    switch(updatedTempProfessional) {
      case(?updatedtempprofessional) { #ok("Your data updated successfully"); };
      case(null) { #err("Either you are not registered or some error occured")};
    };
  };

  public shared({caller}) func deleteProfessional(): async Result.Result<Text, Text> {
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    HealthProfessionals.delete(caller);
    totalHealthProfessionals := totalHealthProfessionals - 1;
    #ok("Your data deleted successfully");
  };

  //PROFESSIONAL CRUD SECTION ENDS

  //PROFESSIONAL APPROVE SECTION STARTS

  public shared ({caller}) func getListOfProfessionalToApprove(): async Result.Result<[IDLinkProfessional], Text>{
    if(caller != admin){
      return #err("Only Admin Call Approve Professional");
    };
    if(0 == HealthProfessionals.size()){
      return #err("Currently no professional is available for Approval");
    };
    let tempListOfProf = Buffer.Buffer<IDLinkProfessional>(0);
     for ( (keyID, valueProf) in HealthProfessionals.entries()){
       let tempIDLinkProfessional : IDLinkProfessional = {
        ID = Principal.toText(keyID);
        professional = valueProf;
      };
      tempListOfProf.add(tempIDLinkProfessional);
    };
    
    #ok(Buffer.toArray(tempListOfProf));
  };

  public shared({caller}) func approveProfessional(professionalID: Text): async Result.Result<Text, Text>{
    if(caller != admin){
      return #err("Only Admin Can Approve Professional");
    };
    let profID =  Principal.fromText(professionalID);

    let goingToApproved = HealthProfessionals.get(profID);
    switch(goingToApproved){
      case(?goingtoapproved) { 
        ApprovedProfessionals.put(profID, goingtoapproved);
        HealthProfessionals.delete(profID);
        totalApprovedProfessionals := totalApprovedProfessionals + 1;
        #ok("Successfully Approved professional");                                        
      };
      case(null) { #err("Check details of professional")};
    };
  };

  public shared({caller}) func disapproveProfessional(professionalID: Text): async Result.Result<Text, Text>{
    if(caller != admin){
      return #err("Only Admin Call Approve Professional");
    };
    let profID= Principal.fromText(professionalID);
    ApprovedProfessionals.delete(profID);
    totalApprovedProfessionals := totalApprovedProfessionals - 1;
    #ok("Successfully removed");
  };

  //PROFESSIONAL APPROVE SECTION ENDS

  //PROFESSIONAL MEETING AVAILABILITY SECTION STARTS

  public shared ({caller}) func createProfessionalAvailability(availablity: MeetingAvailability): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == ApprovedProfessionals.get(caller)){
      return #err("Sorry you can't access this, please request admin to approve you or wait for it");
    };
    AvailableServicesProfessionals.put(caller, availablity);
    #ok("Successfully updated service details");
  };

  public shared ({caller}) func readProfessionalAvailability(): async Result.Result<MeetingAvailability, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let tempmeetingavailability = AvailableServicesProfessionals.get(caller);
    switch(tempmeetingavailability) {
      case(?value) { #ok(value) };
      case(null) { #err("Please register your Meeting Availability Details")};
    };
  };

  public shared ({caller}) func deleteProfessionalAvailability(): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == ApprovedProfessionals.get(caller) or null == AvailableServicesProfessionals.get(caller)){
      return #err("Sorry you can't access this");
    };
    AvailableServicesProfessionals.delete(caller);
    #ok("Successfully deleted service details");
  };

  public shared ({caller}) func getAvailableServiceProfessionals(): async Result.Result<[IDLinkMeetingAvailability],Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == AvailableServicesProfessionals.get(caller) and null == HealthUsers.get(caller)  ){
        return #err("Sorry you can't access this list");
    };
    let tempIDLinkMeetingBuffer = Buffer.Buffer<IDLinkMeetingAvailability>(0);
    for ((keyID, valueMeetAva) in AvailableServicesProfessionals.entries()){
      let tempLink :IDLinkMeetingAvailability = {
        ID = Principal.toText(keyID);
        meetingAvailability = valueMeetAva;
      };
      tempIDLinkMeetingBuffer.add(tempLink);
    };
    #ok(Buffer.toArray(tempIDLinkMeetingBuffer)); 
  };

  //PROFESSIONAL MEETING AVAILABILITY SECTION ENDS

  //FACILITY CRUD OPERATION STARTS

  public shared({caller}) func createFacility(facility: Facility): async Result.Result<Text, Text>{
      if(Principal.isAnonymous(caller)){
        return #err("Anonymous persons can't register, please login with wallet or internet identity");
      };
      if(null != AllUserLists.get(caller)){
       return #err( "You are already registered with this platform");
      };
      AllUserLists.put(caller, (AllUserLists.size() + 1 ));
      HealthFacilities.put(caller, facility);
      totalHealthFacilities := totalHealthFacilities + 1;
      #ok("You are registered as Facility number: " # Int.toText(totalHealthFacilities));
  };

  public shared({caller}) func readFacility(): async Result.Result<Facility, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };

    let tempFacility = HealthFacilities.get(caller);
    switch(tempFacility) {
      case(?tempfacility) { 
        #ok(tempfacility) 
      };
      case(null) { 
        let temp = ApprovedFacilities.get(caller);
        switch(temp) {
          case(?value) { #ok(value) };
          case(null) { 
            #err("Sorry you are not registered");
          };
        };
      };
    };
    
 };

  public shared({caller}) func updateFacility(facility: Facility): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };

    let tempFacility = HealthFacilities.replace(caller, facility);
    #ok("Your data updated successfully");
  };

  public shared({caller}) func deleteFacility(): async Result.Result<Text, Text> {
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    HealthFacilities.delete(caller);
    totalHealthFacilities := totalHealthFacilities - 1;
    #ok("Your data deleted successfully");
  };

  //FACILITY CRUD OPERATION ENDS

  //FACILITY APPROVE STARTS

  public shared ({caller}) func getListOfServiceToApprove(): async Result.Result<[IDLinkFacility], Text>{
    if(caller != admin){
      return #err("Only Admin Call Approve Professional");
    };
    if(0 == HealthFacilities.size()){
      return #err("Currently no Facility is available for Approval");
    };
    let tempListOfFaci = Buffer.Buffer<IDLinkFacility>(0);
     for ( (keyID, valueFaci) in HealthFacilities.entries()){
       let tempIDLinkFacility : IDLinkFacility = {
        ID = Principal.toText(keyID);
        facility = valueFaci;
      };
      tempListOfFaci.add(tempIDLinkFacility);
    };
    #ok(Buffer.toArray(tempListOfFaci));
  };

  public shared({caller}) func approveFacility(facilityID: Text): async Result.Result<Text, Text>{
    if(caller != admin){
      return #err("Only Admin Call Approve Facility");
    };
    let faciID= Principal.fromText(facilityID);
    let approved = HealthFacilities.get(faciID);
    switch(approved){
      case(?value) { 
        ApprovedFacilities.put(faciID, value);
        HealthFacilities.delete(faciID);
        totalApprovedFacilities := totalApprovedFacilities + 1;
        #ok("Successfully approved the facility");};
      case(null) { #err("Please check info of facility")};
    };
  };

  public shared({caller}) func disapproveFacility(facilityID: Principal): async Result.Result<Text, Text>{
    if(caller != admin){
      return #err("Only Admin Can Approve Facility");
    };
    ApprovedFacilities.delete(facilityID);
    totalApprovedFacilities := totalApprovedFacilities - 1;
    #ok("Success");
  };
  
  //FACILITY DISAPPROVE ENDS

  //FACILITY SERVICE AVAILABILITY SECTION STARTS
    public shared ({caller}) func createFacilityAvailability(availablity: ServiceAvailability): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == ApprovedFacilities.get(caller)){
      return #err("Sorry you can't access this, request admin to approve or wait for it");
    };
    AvailableServicesFacilities.put(caller, availablity);
    #ok("Successfully updated service details");
  };

  public shared({caller}) func readFacilityAvailability(): async Result.Result<ServiceAvailability, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };

    let tempserviceavailability = AvailableServicesFacilities.get(caller);
    switch(tempserviceavailability) {
      case(?value) { #ok(value)  };
      case(null) {#err("Register Your Service Info") };
    };
  };

  public shared ({caller}) func deleteFacilityAvailability(): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == ApprovedFacilities.get(caller) or null == AvailableServicesFacilities.get(caller)){
      return #err("Sorry you can't access this");
    };
    AvailableServicesFacilities.delete(caller);
    #ok("Successfully deleted service details");
  };

  public shared ({caller}) func getAvailableServiceFacilities(): async Result.Result<[IDLinkServiceAvailability],Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if (null == AvailableServicesFacilities.get(caller) and null == HealthUsers.get(caller)  ){
        return #err("Sorry you can't access this list");
    };
    let tempListOfFaci = Buffer.Buffer<IDLinkServiceAvailability>(0);
    for ( (keyID, valueFaci) in AvailableServicesFacilities.entries()){
       let tempIDLinkServiceAvailability : IDLinkServiceAvailability = {
        ID = Principal.toText(keyID);
        serviceAvailability = valueFaci;
      };
      tempListOfFaci.add(tempIDLinkServiceAvailability);
    };
    #ok(Buffer.toArray(tempListOfFaci)); 
  };

  //FACILITY SERVICE AVAILABILITY SECTION ENDS

  //MEETING ARRANGE SECTION STARTS

  public shared({caller}) func scheduleAppointment(profBookID: Text, appointmentTimeofMeet: Nat): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let professionalID = Principal.fromText(profBookID);
    // Check if the professional exists and is approved
    let professional = ApprovedProfessionals.get(professionalID);
    switch(professional){
      case(?prof) {
        // Create a Meeting
        let tempUser = HealthUsers.get(caller);
        switch(tempUser){
          case(?tempuser) {         
            let tempHashMapsOfUserMeetings = Meetings.get(caller);
            switch(tempHashMapsOfUserMeetings) {
              case(?value1) {
                let tempAppointments = value1.get(professionalID); 
                switch(tempAppointments) {
                  case(?valueArray) {
                      let meetingAvaInfo = AvailableServicesProfessionals.get(professionalID);
                      switch(meetingAvaInfo) {
                        case(?value) {                       
                          let meeting : Meeting = {
                            user = tempuser.Name;
                            professional = prof.Name;
                            appointmentTime = appointmentTimeofMeet;
                            charge = value.charge;
                            meetingLink = "https://brie.fi/ng/" # prof.Username # "with" # tempuser.Username;
                          };
                          let meetings = Buffer.fromArray<Meeting>(valueArray);
                          meetings.add(meeting);
                          let arrayofMeetings = Buffer.toArray(meetings);
                          value1.put(professionalID, arrayofMeetings);
                          Meetings.put(caller, value1);
                          let tempHashMapOfProfessionalMeetings = Meetings.get(professionalID);
                          switch(tempHashMapOfProfessionalMeetings) {
                            case(?value2) { 
                              value2.put(caller, arrayofMeetings);
                              Meetings.put(professionalID, value2);
                             };
                            case(null) { //This case will not implemented
                              let tempHashMap3 = HashMap.HashMap<Principal, [Meeting]>(0, Principal.equal, Principal.hash);
                              tempHashMap3.put(caller, arrayofMeetings);
                              Meetings.put(professionalID, tempHashMap3);
                            };
                          };
                          #ok("Appointment scheduled successfully"); 
                        };
                        case(null) { #err("Professional is not available for Booking");};
                      };
                  };
                  case(null) {
                    let meetingAvaInfo = AvailableServicesProfessionals.get(professionalID);
                    switch(meetingAvaInfo) {
                      case(?value) {                 
                        let meeting : Meeting = {
                          user = tempuser.Name;
                          professional = prof.Name;
                          appointmentTime = appointmentTimeofMeet;
                          charge = value.charge;
                          meetingLink = "https://brie.fi/ng/" # prof.Username # "with" # tempuser.Username;
                        };
                        let temp = [];
                        let meetings = Buffer.fromArray<Meeting>(temp);
                        meetings.add(meeting);
                        let arrayofMeetings = Buffer.toArray(meetings);
                        value1.put(professionalID, arrayofMeetings);
                        Meetings.put(caller,value1);
                        let tempHashMapOfProfessionalMeetings = Meetings.get(professionalID);
                        switch(tempHashMapOfProfessionalMeetings) {
                          case(?value2) { 
                            value2.put(caller, arrayofMeetings);
                            Meetings.put(professionalID, value2);
                          };
                          case(null) { 
                            let tempHashMap3 = HashMap.HashMap<Principal, [Meeting]>(0, Principal.equal, Principal.hash);
                            tempHashMap3.put(caller, arrayofMeetings);
                            Meetings.put(professionalID, tempHashMap3);
                          };
                        };
                        #ok("Appointment scheduled successfully");  
                      };
                      case(null) { #err("Professional is not available for Booking"); };
                    };
                   };
                };
              };
              case(null) { 
                let meetingAvaInfo = AvailableServicesProfessionals.get(professionalID);
                switch(meetingAvaInfo) {
                  case(?value) {                 
                    let meeting : Meeting = {
                      user = tempuser.Name;
                      professional = prof.Name;
                      appointmentTime = appointmentTimeofMeet;
                      charge = value.charge;
                      meetingLink = "https://brie.fi/ng/" # prof.Username # "with" # tempuser.Username;
                    };
                    let temp = [];
                    let meetings = Buffer.fromArray<Meeting>(temp);
                    meetings.add(meeting);
                    let arrayofMeetings = Buffer.toArray(meetings);
                    let tempHashMap1 = HashMap.HashMap<Principal, [Meeting]>(0, Principal.equal, Principal.hash);
                    tempHashMap1.put(professionalID, arrayofMeetings);
                    Meetings.put(caller, tempHashMap1);
                    let tempHashMapOfProfessionalMeetings = Meetings.get(professionalID);
                    switch(tempHashMapOfProfessionalMeetings) {
                      case(?value11) { 
                        value11.put(caller, arrayofMeetings);
                        Meetings.put(professionalID, value11);
                      };
                      case(null) { 
                        let tempHashMap2 = HashMap.HashMap<Principal, [Meeting]>(0, Principal.equal, Principal.hash);
                        tempHashMap2.put(caller, arrayofMeetings);
                        Meetings.put(professionalID, tempHashMap2);
                      };
                    };
                    #ok("Appointment scheduled successfully");  
                  };
                  case(null) { #err("Professional is not available for Booking"); };
                };
              };
            }; 
          };
          case(null) { #err("You are not registered")};
        };
       
      };
      case(null) {
        #err("Professional not found or not approved");
      };
    };
  };

  public shared({caller}) func getAppointment(): async Result.Result<[Meeting], Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let tempHashMap1 = Meetings.get(caller);
    switch(tempHashMap1){
      case (?valueHashMap){
        let arrayMeetingsArray = valueHashMap.vals();
        let returnMeetingsarray = Buffer.Buffer<Meeting>(0);
        for (arrayMeetings in arrayMeetingsArray){
          let tempoBuff = Buffer.fromArray<Meeting>(arrayMeetings);
          returnMeetingsarray.append(tempoBuff);
        };
        let tempoarray = Buffer.toArray(returnMeetingsarray);
        #ok(tempoarray);
      };
      case (null) {#err("Nothing Available")};
    }
  };

  //ORDER PURCHASE SECTION STARTS

  public shared({caller}) func purchaseOrder(facilityOrderID: Text, quantityBook: Nat): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let facilityID = Principal.fromText(facilityOrderID);
    let facility = ApprovedFacilities.get(facilityID);
    switch(facility) {
      case(?value) {  
        let tempUser = HealthUsers.get(caller);
        switch(tempUser) {
          case(?value) {  
            let tempHashMapOfUserOrders = Orders.get(caller);
            switch(tempHashMapOfUserOrders) {
              case(?value111) {  
                let tempShipments = value111.get(facilityID);
                switch(tempShipments) {
                  case(?valueArray) { 
                    let orderAvaInfo = AvailableServicesFacilities.get(facilityID);
                    switch(orderAvaInfo) {
                      case(?value) {     
                        if(value.availableQuantity == 0){
                          return #err("Sorry product is out of stock");
                        };
                        if(value.availableQuantity < quantityBook){
                          return #err("Available quantity is less than your order");
                        };
                        let neworderAvaInfo : ServiceAvailability = {
                          availableQuantity = value.availableQuantity - quantityBook;
                          deliveryTime = value.deliveryTime;
                          price = value.price;
                          service = value.service;
                          unit = value.unit;
                        };
                        AvailableServicesFacilities.put(facilityID, neworderAvaInfo);                 
                        let shipment: ServiceOrder = {
                          service = value.service;
                          userPrincipal = caller;
                          facilityPrincipal = facilityID;
                          status = #Ordered;
                          quantity= quantityBook;
                          orderTime = value.deliveryTime;
                          charge = value.price;
                        };
                        let freezedValueArray =  Array.freeze<ServiceOrder>(valueArray);
                        let shipments = Buffer.fromArray< ServiceOrder>(freezedValueArray);
                        shipments.add(shipment);
                        let arrayOfOrders = Array.thaw<ServiceOrder>(Buffer.toArray(shipments));
                        value111.put(facilityID, arrayOfOrders);
                        Orders.put(caller,value111);
                        let tempHashMapOfFacilityOrders = Orders.get(facilityID);
                        switch(tempHashMapOfFacilityOrders) {
                          case(?value) { 
                            value.put(caller, arrayOfOrders);
                            Orders.put(facilityID, value);
                           };
                          case(null) { 
                            let tempHashMap6767 = HashMap.HashMap<Principal, [var ServiceOrder]>(0, Principal.equal, Principal.hash);
                            tempHashMap6767.put(caller, arrayOfOrders);
                            Orders.put(facilityID, tempHashMap6767);
                          };
                        };
                        #ok("Your Order booked Sucessfully");
                      };
                      case(null) {
                        return #err("This facility currently does not accept orders")
                      };
                    };
                  };
                  case(null) { 
                    let orderAvaInfo = AvailableServicesFacilities.get(facilityID);
                    switch(orderAvaInfo) {
                      case(?value) {
                        if(value.availableQuantity == 0){
                          return #err("Sorry product is out of stock");
                        };
                        if(value.availableQuantity < quantityBook){
                          return #err("Available quantity is less than your order");
                        };
                        let neworderAvaInfo : ServiceAvailability = {
                          availableQuantity = value.availableQuantity - quantityBook;
                          deliveryTime = value.deliveryTime;
                          price = value.price;
                          service = value.service;
                          unit = value.unit;
                        };
                        AvailableServicesFacilities.put(facilityID, neworderAvaInfo);                              
                        let shipment: ServiceOrder = {
                          service = value.service;
                          userPrincipal = caller;
                          facilityPrincipal = facilityID;
                          status = #Ordered;
                          quantity= quantityBook;
                          orderTime = value.deliveryTime;
                          charge = value.price;
                        };
                        let temp =[];
                        let shipments = Buffer.fromArray<ServiceOrder>(temp);
                        shipments.add(shipment);
                        let arrayOfOrders = Array.thaw<ServiceOrder>(Buffer.toArray(shipments));
                        value111.put(facilityID, arrayOfOrders);
                        Orders.put(caller, value111);
                        let tempHashMapOfFacilityOrders = Orders.get(facilityID);
                        switch(tempHashMapOfFacilityOrders) {
                          case(?value) { 
                            value.put(caller, arrayOfOrders);
                            Orders.put(facilityID, value);
                           };
                          case(null) { 
                            let tempHashMap6767 = HashMap.HashMap<Principal, [var ServiceOrder]>(0, Principal.equal, Principal.hash);
                            tempHashMap6767.put(caller, arrayOfOrders);
                            Orders.put(facilityID, tempHashMap6767);
                          };
                        };

                        #ok("Your Order booked Sucessfully");
                      };
                      case(null) {
                        return #err("This facility currently does not accept orders")
                      };
                    };
                  };
                };
              };
              case(null) { 
                let orderAvaInfo = AvailableServicesFacilities.get(facilityID);
                switch(orderAvaInfo) {
                  case(?value) {  
                    if(value.availableQuantity == 0){
                      return #err("Sorry product is out of stock");
                    };
                    if(value.availableQuantity < quantityBook){
                      return #err("Available quantity is less than your order");
                    };
                    let neworderAvaInfo : ServiceAvailability = {
                      availableQuantity = value.availableQuantity - quantityBook;
                      deliveryTime = value.deliveryTime;
                      price = value.price;
                      service = value.service;
                      unit = value.unit;
                    };
                    AvailableServicesFacilities.put(facilityID, neworderAvaInfo);                            
                    let shipment: ServiceOrder = {
                      service = value.service;
                      userPrincipal = caller;
                      facilityPrincipal = facilityID;
                      status = #Ordered;
                      quantity= quantityBook;
                      orderTime = value.deliveryTime;
                      charge = value.price;
                    };
                    let temp =[];
                    let shipments = Buffer.fromArray<ServiceOrder>(temp);
                    shipments.add(shipment);
                    let arrayOfOrders = Array.thaw<ServiceOrder>(Buffer.toArray(shipments));
                    let tempHashMap1 = HashMap.HashMap<Principal, [var ServiceOrder]>(0, Principal.equal, Principal.hash);
                    tempHashMap1.put(facilityID,arrayOfOrders);
                    Orders.put(caller, tempHashMap1);
                    let tempHashMapOfFacilityOrders = Orders.get(facilityID);
                    switch(tempHashMapOfFacilityOrders) {
                      case(?value) { 
                          value.put(caller, arrayOfOrders);
                          Orders.put(facilityID,value);
                      };
                      case(null) { 
                        let tempHashMap11 = HashMap.HashMap<Principal, [var ServiceOrder]>(0, Principal.equal, Principal.hash);
                        tempHashMap11.put(caller, arrayOfOrders);
                        Orders.put(facilityID, tempHashMap11);
                      };
                    };
                    #ok("Your Order booked Sucessfully");
                  };
                  case(null) {
                    return #err("This facility currently does not accept orders")
                  };
                };
              };
            };
          };
          case(null) { 
            return #err("You are not registered please register yourself first");
          };
        };
      };
      case(null) {
        return #err("Facility not found for placing order");
      };
    };
  };

  public shared({caller}) func getOrders(): async Result.Result<[ServiceOrder], Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    let tempHashMap1 = Orders.get(caller);
    switch(tempHashMap1){
      case (?valueHashMap){
        let arrayOrdersArray = valueHashMap.vals();
        let returnOrdersarray = Buffer.Buffer<ServiceOrder>(0);
        for (arrayOrders in arrayOrdersArray){
          let arrayOrdersTemp = Array.freeze<ServiceOrder>(arrayOrders);
          let tempoBuff = Buffer.fromArray<ServiceOrder>(arrayOrdersTemp);
          returnOrdersarray.append(tempoBuff);
        };
        let tempoarray = Buffer.toArray(returnOrdersarray);
        #ok(tempoarray);
      };
      case (null) {
        #err("Nothing Available");
      };
    };  
  };
    
  public shared ({caller}) func getOrdersByFacility(): async Result.Result<[IDLinkServiceOrder], Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if( null == AvailableServicesFacilities.get(caller)){
      return #err("You don't have any orders");
    };

    let tempHashMap1 = Orders.get(caller);
    switch(tempHashMap1) {
      case(?value) { 
        let tempEmptyBuffer = Buffer.Buffer<IDLinkServiceOrder>(0);
        for ((keyID, valueArray ) in value.entries()){
          let temp = Array.freeze(valueArray);
          let tempArrayLink : IDLinkServiceOrder = {
            ID = Principal.toText(keyID);
            orderArray = temp;
          };
          tempEmptyBuffer.add(tempArrayLink);
        };
        return #ok(Buffer.toArray(tempEmptyBuffer));
       };
      case(null) { return #err("No order is present");
      };
    };
  };

  public shared ({caller}) func updateStatusOfOrder(id: Text, index: Nat, orderUpdatedStatus: ServiceStatus): async Result.Result<Text, Text>{
    if(Principal.isAnonymous(caller)){
      return #err("Anonymous person not registered, please login with wallet or internet identity");
    };
    if( null == AvailableServicesFacilities.get(caller)){
      return #err("You are not allowed to do this");
    };
    let userID = Principal.fromText(id);
    let tempHashMap1 = Orders.get(caller);
    switch(tempHashMap1) {
      case(?value1) { 
        let userOrdersArray = value1.get(userID);
        switch(userOrdersArray) {
          case(?valueArray) { 
            let orderUpdated: ServiceOrder = {
              charge = valueArray[index].charge;
              facilityPrincipal = valueArray[index].facilityPrincipal;
              orderTime = valueArray[index].orderTime;
              quantity = valueArray[index].quantity;
              status = orderUpdatedStatus;
              service = valueArray[index].service;
              userPrincipal = valueArray[index].userPrincipal;
            };
            valueArray.put(index, orderUpdated);
            value1.put(userID, valueArray);
            Orders.put(caller,value1);
            let tempHashMap2 = Orders.get(userID);
            switch(tempHashMap2) {
              case(?value2) { 
                value2.put(caller, valueArray);
                Orders.put(userID, value2);                 
              };
              case(null) {  };
            };
            #ok("Orders details updated Sucessfully");
          };
          case(null) {
            return #err("User has not placed any order");
          };
        };
       };
      case(null) { 
        return #err("No orders present, you can't update anything");
      };
    };


  }

  

  //ORDER PURCHASE SECTION ENDS

};
