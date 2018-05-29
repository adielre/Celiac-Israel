import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { AddEditScreenComponent } from "./add-edit-screen/add-edit-screen.component";
import { MainScreenComponent } from "./main-screen/main-screen.component";

export const routing: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "edit-screen", component: AddEditScreenComponent },
    { path: "main-screen", component: MainScreenComponent }
]