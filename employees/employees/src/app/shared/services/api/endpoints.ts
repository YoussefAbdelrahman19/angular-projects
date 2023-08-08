
const BASE_URL = "http://task.soft-zone.net";
const API_URL = BASE_URL + "/api";
const Employees = "/Employees";

const ALL_EMPLOYEE_URL = "/getAllEmployees";
const ADD_EMPLOYEE_URL = "/addEmployee";
const DELETE_EMPLOYEE_URL = "/deleteEmpByID";
const EDIT_EMPLOYEE_URL = "/editEmployee";
const getEmpByID_URL= "/getEmpByID";


export abstract class EndPoints {
    public static BASE_URL = BASE_URL;
    public static API_URL = API_URL;
    public static ALL_EMPLOYEE_ENDPOINT = API_URL + Employees + ALL_EMPLOYEE_URL;
    public static NEW_EMPLOYEE_ENDPOINT = API_URL + Employees + ADD_EMPLOYEE_URL;
    public static DELETE_ENDPOINT_ENDPOINT = API_URL + Employees + DELETE_EMPLOYEE_URL;
    public static EDIT_EMPLOYEE_ENDPOINT = API_URL + Employees + EDIT_EMPLOYEE_URL;
    public static getEmpByID_ENDPOINT = API_URL + Employees + getEmpByID_URL;

    
   
}
