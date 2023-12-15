
export type User = {
  user_id: number;
  username: string;
  password_hash: string;
  email: string;
  created_at: Date;
};

// Project Type
export type Project = {
  project_id: number;
  project_name: string;
  user_id: number;
  created_at: Date;
};

// Task Type
export type Task = {
  task_id: number;
  task_name: string;
  project_id: number;
  user_id: number;
  description: string;
  due_date: Date;
  status: string;
  priority: string;
  created_at: Date;
  updated_at: Date;
};

export type TaskCategory = {
  category_id: number;
  category_name: string;
  created_at: Date;
  // Add other category-related fields as needed
};

// Task Category Association Type
export type TaskCategoryAssociation = {
  task_id: number;
  category_id: number;
  created_at: Date;
};
