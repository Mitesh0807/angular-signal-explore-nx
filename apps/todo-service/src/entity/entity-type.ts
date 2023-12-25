import { Project } from "./Project.entity";

// User Type
export type TUser = {
  id: number,
  name: string,
  email: string,
  password: string,
  projects: Project[],
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
}
// Project Type

export type TProject = {
  project_id: number;
  project_name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};
type TTask = {
  task_id: number;
  task_name: string;
  project_id: number;
  user_id: number;
  description: string;
  due_date: Date;
  status: 'pending' | 'in progress' | 'completed';
  priority: ' low' | 'medium' | 'high';
  created_at: Date;
  updated_at: Date;
};

// Task Category Type
type TTaskCategory = {
  category_id: number;
  category_name: string;
  // Add other category-related fields as needed
};

type TTaskCategoryAssociation = {
  task_id: number;
  category_id: number;
};
