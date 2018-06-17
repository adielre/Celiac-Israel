import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component";
import { AddEditScreenComponent } from "./add-edit-screen/add-edit-screen.component";
import { MainScreenComponent, MainScreenPopupComponent } from "./main-screen/main-screen.component";
import { AuthGuardService } from './servises/auth-guard.service';
import { AddAdminComponent } from "./add-admin/add-admin.component";


export const routing: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "edit-screen", component: AddEditScreenComponent, canActivate: [AuthGuardService]},
    { path: "main-screen", component: MainScreenComponent, canActivate: [AuthGuardService]},
    { path: "add-admin", component: AddAdminComponent, canActivate: [AuthGuardService]},
    { path: "popup", component: MainScreenPopupComponent }
]   