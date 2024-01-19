import { createAction } from "@ngrx/store";
import { Employee } from "src/app/entity/employee";

export const addEmployee = createAction(
    '[Employee] Add Employee',
    (newEmployee: Employee) => ({ newEmployee })
);