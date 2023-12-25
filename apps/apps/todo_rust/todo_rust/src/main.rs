use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use sqlx::{ postgres::PgPoolOptions, Pool, Postgres };

#[actix_web::main]
async fn main() -> std::io::Result<()> {
  let pool = PgPoolOptions::new()
    .max_connections(5)
    .connect("postgres://postgres:postgres@localhost:5433/todo")
    .await.unwrap();
  println!( "{:#?}",pool);
    HttpServer::new(move || {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
            .app_data( web::Data::new(pool.clone()))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}
async fn manual_hello( pool: web::Data<Pool<Postgres>>) -> impl Responder {
    let mut conn = pool.acquire().await.unwrap();
    let row = sqlx::query!("SELECT name FROM users")
        .fetch_one(&mut conn)
        .await
        .unwrap();

    HttpResponse::Ok().body("Hey there!")
}
