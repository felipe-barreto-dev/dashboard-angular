import { Route, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { DashboardComponent } from "./dashboard.component";

export const DashboardRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN,MANAGER,FUNC' }
  }
]
