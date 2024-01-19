import { Action, createReducer, on } from "@ngrx/store";
import { Employee } from "src/app/entity/employee";
import { addEmployee } from "./empoyee.actions";


export const employeeFeatureKey = 'employees@Teranet';
export interface EmployeeState {
    employees: Employee[];
};
export const initialState: EmployeeState = {
    employees: []
};
export const employeeReducer = createReducer(
    initialState,
    on(addEmployee, (state: EmployeeState, { newEmployee }) => ({
        ...state,
        employees: [...state.employees, newEmployee]
    }))
);

export function reducer(state: EmployeeState | undefined, action: Action): any {
    return employeeReducer(state, action);
};