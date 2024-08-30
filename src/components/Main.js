import React from "react";

export default function Body({
  handleScrollToProjects,
  handleButtonClickKOMPAS,
  handleButtonClickTODO,
  handleButtonClickStudents,
  handleButtonClickSQLite,
  handleButtonClickShop,
  handleButtonClickCustomView,
  handleButtonClickTimeZones,
}) {
  return (
    <main>
      <div className="intro intro-wrapper">
        <h1>Меня зовут Арюпина София</h1>
        <h2>Я начинающий Java-разработчик, ознакомьтесь с моими проектами</h2>
        <button onClick={handleScrollToProjects}>Проекты</button>
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <div className="scroll"></div>
      </div>
      <div className="about-me" id="about-me">
        <h1>Обо мне</h1>
        <div className="border"></div>
        <div className="info">
          <div className="path">
            <h3>Мой путь</h3>
            <p>
              <div className="paragraph">
                Меня зовут <b>Арюпина София</b>, я начинающий{" "}
                <b>Java-разработчик</b>.
              </div>
              <div className="paragraph">
                Живу в Москве, учусь на 3-ем курсе в{" "}
                <b>Московском Политехническом Университете </b>
                по специальности <b>
                  "Интеграция и программирование в САПР"
                </b>{" "}
                ("Информатика и вычислительная техника").
              </div>
              <div className="paragraph">
                Изучаю Java-разработку <b>более двух лет</b>.
              </div>
              <div className="paragraph">
                В моем опыте есть: <b> Java-разработка</b> по курсу от
                "PRODUCTSTAR", <b>Android-разработка</b> по курсу от "Android
                Developers", <b>C++- и Fullstack-разработка</b> в целях обучения
                в университете.
              </div>
            </p>
          </div>
          <div className="skills">
            <h3>Мои скиллы</h3>
            <ul>
              <button>Java</button>
              <button>Spring</button>
              <button>Spring Boot</button>
              <button>JavaFX</button>
              <button>Hibernate</button>
              <button>Spring Data</button>
              <button>Cisco</button>
              <button>HTTP</button>
              <button>MySQL</button>
              <button>PostgreSQL</button>
              <button>SQLite</button>
              <button>API</button>
              <button>JavaScript</button>
              <button>C++</button>
              <button>HTML</button>
              <button>CSS</button>
              <button>express.js</button>
              <button>React</button>
              <button>Android-development</button>
              <button>Git</button>
              <button>JSON</button>
              <button>XML</button>
              <button>Node.js</button>
              <button>Английский B2</button>
            </ul>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Проекты</h1>
        <div className="border"></div>
        <ul>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/todo.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="todo-list"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>TODO-List</h3>
              <p>
                <div className="paragraph">
                  Приложение для управления списком задач, которое позволяет
                  пользователям просматривать и фильтровать задачи. Работа с API{" "}
                  <a
                    href="https://todo.doczilla.pro/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    todo.doczilla.pro
                  </a>
                  .
                </div>
                <div className="paragraph">
                  Стек:{" "}
                  <b>
                    Spring Boot, Java, API, RestTemplate, Thymeleaf, JavaScript,
                    jQuery, CSS, HTML
                  </b>
                </div>
              </p>
              <button onClick={handleButtonClickTODO}>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/students.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="students-db"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>База данных студентов</h3>
              <p>
                <div className="paragraph">
                  Веб-приложение для управления информацией о студентах, включая
                  добавление, просмотр и удаление студенческих записей.
                </div>
                <div className="paragraph">
                  Стек:{" "}
                  <b>
                    Spring Boot, Java, PostgreSQL, Thymeleaf, HikariCP,
                    JavaScript, jQuery, CSS, HTML
                  </b>
                </div>
              </p>
              <button onClick={handleButtonClickStudents}>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/underwood.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="messenger"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>Мессенджер (в разработке)</h3>
              <p>
                <div className="paragraph">
                  Мессенджер создан с целью уравноправить пользователей, так как
                  каждый будет наделен правами "премиум" (как у Telegram).
                </div>
                <div className="paragraph">
                  Стек:{" "}
                  <b>
                    Spring Boot, Java, MongoDB, API, RestTemplate, React Native,
                    JavaScript, CSS, HTML
                  </b>
                </div>
              </p>
              <button disabled>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/kompasAPI.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="kompas"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>API КОМПАС-3D</h3>
              <p>
                <div className="paragraph">
                  MFC SDI-приложение с реализацией построения параметрической
                  сборки. Программа постепенно строит составные детали, после
                  чего добавляет их в сборку и соединяет их друг с другом с
                  помощью различных привязок.
                </div>
                <div className="paragraph">
                  Стек: <b>C++, Visual Studio, API КОМПАС-3D.</b>
                </div>
              </p>
              <button onClick={handleButtonClickKOMPAS}>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/auth.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="sqlite"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>SQLite</h3>
              <p>
                <div className="paragraph">
                  Разработка несложного интерфейса для работы с БД, в моем
                  случае SQLite. Авторизованные пользователи могут добавлять
                  новые строки в базу данных, для неавторизованных доступен
                  только просмотр, остальные функции пока в разработке.
                </div>
                <div className="paragraph">
                  Стек: <b>express.js, SQLite, JS, JSON, HTML, CSS.</b>
                </div>
              </p>
              <button onClick={handleButtonClickSQLite}>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/shop.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="shop"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>ReactJS Интернет-магазин</h3>
              <p>
                <div className="paragraph">
                  Pet-проект с реализацией интернет-магазина, который отображает
                  карточки товаров мебели. Можно посмотреть описание товара,
                  добавить или удалить из корзины.
                </div>
                <div className="paragraph">
                  Стек: <b>express.js, SQLite, React.</b>
                </div>
              </p>
              <button onClick={handleButtonClickShop}>Перейти в Git</button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/timeView.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="android custom view"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>Custom View</h3>
              <p>
                <div className="paragraph">
                  Кастомный вид в Android Studio, который отображает текущее
                  время (GMT+3).
                </div>
                <div className="paragraph">
                  Стек: <b>Kotlin, Android Studio.</b>
                </div>
              </p>
              <button onClick={handleButtonClickCustomView}>
                Перейти в Git
              </button>
            </div>
          </li>
          <li className="project-card">
            <div className="laptop">
              <img src="./img/laptop.png" alt="laptop"></img>
              <div className="video-container">
                <iframe
                  src="./vid/timeZones.mp4"
                  frameborder="0"
                  controls
                  muted
                  allowFullScreen
                  title="test memory android app"
                ></iframe>
              </div>
            </div>
            <div className="description">
              <h3>Test Memory</h3>
              <p>
                <div className="paragraph">
                  Android-приложение/игра на тестирование памяти.
                </div>
                <div className="paragraph">
                  Стек: <b>Kotlin, Android Studio.</b>
                </div>
              </p>
              <button onClick={handleButtonClickTimeZones}>
                Перейти в Git
              </button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
}
