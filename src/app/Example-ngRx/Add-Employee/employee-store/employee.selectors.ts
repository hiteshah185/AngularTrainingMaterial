import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState, employeeFeatureKey } from "./employee.reducers";

export const selectEmployeeState = createFeatureSelector<EmployeeState>(
    employeeFeatureKey
);

export const selectEmployees = createSelector(
    selectEmployeeState,
    (Estate: EmployeeState) => Estate.employees
);