import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { AddEditScreenComponent } from "./add-edit-screen/add-edit-screen.component";
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { EditComponent } from "./edit/edit.component";
import { AuthGuardService } from './servises/auth-guard.service';
import { AddAdminComponent } from "./add-admin/add-admin.component";


export const routing: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    // { path: "edit-screen", component: AddEditScreenComponent },
    // { path: "main-screen", component: MainScreenComponent },
    // { path: "edit:id", component:EditComponent },
   
    { path: "edit-screen", component: AddEditScreenComponent, canActivate: [AuthGuardService]},
    { path: "main-screen", component: MainScreenComponent, canActivate: [AuthGuardService]},
    { path: "add-admin", component: AddAdminComponent, canActivate: [AuthGuardService]}
]