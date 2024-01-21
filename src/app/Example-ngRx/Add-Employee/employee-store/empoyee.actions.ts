import { createAction, createActionGroup, props } from "@ngrx/store";
import { Employee } from "src/app/entity/employee";

export const addEmployee = createAction(
    '[Employee] Add Employee',
    (newEmployee: Employee) => ({ newEmployee })
);


//Add more actions into the below const group to avoid conflicting imports.
export const EmployeeStandardActions = {
    addEmployee
};

export const EmployeeStandardActions_usingActionGroup =
    createActionGroup({
        source: 'Employee',
        events: {
            addAnEmployee: props<{ employee: Employee }>()
        },
    });
const { addAnEmployee } = EmployeeStandardActions_usingActionGroup;