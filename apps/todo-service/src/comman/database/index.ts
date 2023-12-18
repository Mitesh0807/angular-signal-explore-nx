import { DataSource } from "typeorm"
import { User } from "../../entity/User.entity";
import { Project } from "../../entity/Project.entity";

//postgresql connection user postgresql password postgres host localhost port 5433 database todo
export const myDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "postgres",
  database: "todo",
  synchronize: true,
  logging: false,
  entities: [User, Project],
  migrations: ["dist/migration/*.js"],
  subscribers: ["dist/subscriber/*.js"],
});


/*
 *
  cli: {
    entitiesDir: "src",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
 * */
