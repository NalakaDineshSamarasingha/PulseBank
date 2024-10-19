
type User record {
    string email;
    string userpassword;
    string userType = "";
    int id = -1;
};

type Campaign record {
    string CampId;
    int OrganizerId;
    string Date;
    string StartAt;
    string EndAt;
    string Country;
    string Province;
    string District;
    string Town;
    string No;
    string Address;
};

type CountResponse record {
    int count;
};
