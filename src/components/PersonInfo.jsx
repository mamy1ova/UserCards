import React from "react";
import "./PersonInfo.css";

const PersonInfo = () => {
  const users = [
    {
      id: 1,
      firstName: "Wally",
      email: "wgoodere0@delicious.com",
      gender: "Male",
      carModel: "Suzuki",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3db572cf-3470-487c-951f-b856d1c38219/df85z1i-6f2fbe79-65a1-47c9-827d-99a73e27ffad.png/v1/fit/w_396,h_439/minions_nace_un_villano_bob_by_gruydruamarillo_df85z1i-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDM5IiwicGF0aCI6IlwvZlwvM2RiNTcyY2YtMzQ3MC00ODdjLTk1MWYtYjg1NmQxYzM4MjE5XC9kZjg1ejFpLTZmMmZiZTc5LTY1YTEtNDdjOS04MjdkLTk5YTczZTI3ZmZhZC5wbmciLCJ3aWR0aCI6Ijw9Mzk2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.TP5YZFJC0YKu5WxmHd5vyY6YC1hfli8L5oH8zcKOXoc",
    },
    {
      id: 2,
      firstName: "Maddy",
      email: "mosharry1@zimbio.com",
      gender: "Male",
      carModel: "Chevrolet",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3db572cf-3470-487c-951f-b856d1c38219/df7rdcy-d91b1466-c375-4149-8fcc-34b5e380930c.png/v1/fill/w_834,h_833/minions_nace_un_villano_kevin_by_gruydruamarillo_df7rdcy-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMzIiwicGF0aCI6IlwvZlwvM2RiNTcyY2YtMzQ3MC00ODdjLTk1MWYtYjg1NmQxYzM4MjE5XC9kZjdyZGN5LWQ5MWIxNDY2LWMzNzUtNDE0OS04ZmNjLTM0YjVlMzgwOTMwYy5wbmciLCJ3aWR0aCI6Ijw9ODM0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AI9QWnwnztNaPgBe1Zrr35SM6sngsYqRmMiywsbPEsE",
    },
    {
      id: 3,
      firstName: "Jolene",
      email: "jbeltzner2@stanford.edu",
      gender: "Genderqueer",
      carModel: "Mercedes-Benz",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3db572cf-3470-487c-951f-b856d1c38219/dff548v-ce4cc605-b25c-4123-b7e1-b7a39d7e57f1.png/v1/fill/w_608,h_736/minions_nace_un_villano_bob_by_gruydruamarillo_dff548v-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM2IiwicGF0aCI6IlwvZlwvM2RiNTcyY2YtMzQ3MC00ODdjLTk1MWYtYjg1NmQxYzM4MjE5XC9kZmY1NDh2LWNlNGNjNjA1LWIyNWMtNDEyMy1iN2UxLWI3YTM5ZDdlNTdmMS5wbmciLCJ3aWR0aCI6Ijw9NjA4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.4VW6cUoNtcste3XL1yhSZprXZgyKpeQ_sj1nZ1hnMZY",
    },
    {
      id: 4,
      firstName: "Carlyle",
      email: "cdennington3@drupal.org",
      gender: "Male",
      carModel: "Nissan",
      image: "https://freepngimg.com/thumb/minions/111092-minions-free-download-png-hq.png",
    },
    {
      id: 5,
      firstName: "Allison",
      email: "asimpkiss4@biglobe.ne.jp",
      gender: "Female",
      carModel: "BMW",
      image: "https://pngimg.com/d/minions_PNG13.png",
    },
    {
      id: 6,
      firstName: "Lorant",
      email: "lcotsford5@drupal.org",
      gender: "Male",
      carModel: "BMW",
      image: "https://pngimg.com/d/minions_PNG52.png",
    },
    {
      id: 7,
      firstName: "Trip",
      email: "tphizakarley6@soundcloud.com",
      gender: "Male",
      carModel: "Mercury",
      image: "https://pngimg.com/d/minions_PNG34.png",
    },
    {
      id: 8,
      firstName: "Lancelot",
      email: "lhiggen7@php.net",
      gender: "Male",
      carModel: "Porsche",
      image:
        "https://freepngimg.com/save/111070-minions-png-image-high-quality/654x605",
    },
    {
      id: 9,
      firstName: "Gwynne",
      email: "gkillcross8@ucoz.ru",
      gender: "Female",
      carModel: "Saturn",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3920b6fc-0591-4126-a897-c54f41643321/d6fd9tv-9a39a55e-ef41-4ce2-beed-dafd2f1b9882.png/v1/fill/w_410,h_720/minion_png_by_phuongkutenkool_d6fd9tv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMzkyMGI2ZmMtMDU5MS00MTI2LWE4OTctYzU0ZjQxNjQzMzIxXC9kNmZkOXR2LTlhMzlhNTVlLWVmNDEtNGNlMi1iZWVkLWRhZmQyZjFiOTg4Mi5wbmciLCJ3aWR0aCI6Ijw9NDEwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.eSOiRvY2xWCB-XQOzjNJ_qQYWvOpxl_zGzjnftRUtxQ",
    },
    {
      id: 10,
      firstName: "Melamie",
      email: "mthinn9@rambler.ru",
      gender: "Female",
      carModel: "Lincoln",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3db572cf-3470-487c-951f-b856d1c38219/dfbqyja-fd689469-ed99-4e55-b162-8457c41ce9f9.png/v1/fit/w_407,h_537/minions_nace_un_villano_stuart_by_gruydruamarillo_dfbqyja-375w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTM3IiwicGF0aCI6IlwvZlwvM2RiNTcyY2YtMzQ3MC00ODdjLTk1MWYtYjg1NmQxYzM4MjE5XC9kZmJxeWphLWZkNjg5NDY5LWVkOTktNGU1NS1iMTYyLTg0NTdjNDFjZTlmOS5wbmciLCJ3aWR0aCI6Ijw9NDA3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-bFCGZ9k5G356zsXxVZ3qBWEOgvpwVXVVnF-W8ruxJs",
    },
    {
      id: 11,
      firstName: "Melamie",
      email: "mthinn9@rambler.ru",
      gender: "Female",
      carModel: "Lincoln",
      image: "https://pngimg.com/d/minions_PNG67.png",
    },
    {
      id: 12,
      firstName: "Melamie",
      email: "mthinn9@rambler.ru",
      gender: "Female",
      carModel: "Lincoln",
      image:
        "https://sun9-30.userapi.com/impg/78WkS6dJRlUckbjkikxZ7zHvhNgTkJd1U8SnCg/erwtEaLR7Lw.jpg?size=1200x977&quality=95&sign=3d6ec2339c202dd5a881af354e2923f2&type=album",
    },
  ];
  const ClickCard = (userId) => {
    alert(`User ID: ${userId}`);
  };

  return (
    <div className="Cards">
      {users.map((user) => (
        <div
          key={user.id}
          className="UsersCard"
          onClick={() => ClickCard(user.id)}
        >
          <img src={user.image} alt={user.firstName} />
          <h2>{user.firstName}</h2>
          <p>Email: {user.email}</p>
          <p>Gender: {user.gender}</p>
          <p>Car model: {user.carModel}</p>
        </div>
      ))}
    </div>
  );
};

export default PersonInfo;
