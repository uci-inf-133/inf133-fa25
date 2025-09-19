import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Assignments } from './assignments/assignments';
import { Syllabus } from './syllabus/syllabus';
import { Resources } from './resources/resources';
import { Calendar } from './calendar/calendar';
import { A1 } from './a1/a1';
import { A2 } from './a2/a2';
import { A3 } from './a3/a3';
import { A4 } from './a4/a4';
import { A5 } from './a5/a5';

export const routes: Routes = [
    { path: '', component: Homepage},
	{ path: 'assignments', component: Assignments},
	{ path: 'syllabus', component: Syllabus},
	{ path: 'resources', component: Resources},
	{ path: 'calendar', component: Calendar},
	{ path: 'assignments/a1', component: A1},
	{ path: 'assignments/a2', component: A2},
	{ path: 'assignments/a3', component: A3},
	{ path: 'assignments/a4', component: A4},
	{ path: 'assignments/a5', component: A5}
];
