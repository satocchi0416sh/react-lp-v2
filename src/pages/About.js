import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> LibeolPizzaとは</h1>
        <p>
          私は今日初めてこの学習院というものの中に這入はいりました。もっとも以前から学習院は多分この見当だろうぐらいに考えていたには相違そういありませんが、はっきりとは存じませんでした。中へ這入ったのは無論今日が初めてでございます。
          さきほど岡田さんが紹介しょうかいかたがたちょっとお話になった通りこの春何か講演をというご注文でありましたが、その当時は何か差支さしつかえがあって、――岡田さんの方が当人の私よりよくご記憶きおくと見えてあなたがたにご納得のできるようにただいまご説明がありましたが、とにかくひとまずお断りを致いたさなければならん事になりました。しかしただお断りを致すのもあまり失礼と存じまして、この次には参りますからという条件をつけ加えておきました。その時念のためこの次はいつごろになりますかと岡田さんに伺うかがいましたら、此年ことしの十月だというお返事であったので、心のうちに春から十月までの日数を大体繰くってみて、それだけの時間があればそのうちにどうにかできるだろうと思ったものですから、よろしゅうございますとはっきりお受合うけあい申したのであります。ところが幸か不幸か病気に罹かかりまして、九月いっぱい床とこについておりますうちにお約束やくそくの十月が参りました。十月にはもう臥ふせってはおりませんでしたけれども、何しろひょろひょろするので講演はちょっとむずかしかったのです。しかしお約束を忘れてはならないのですから、腹の中では、今に何か云いって来られるだろう来られるだろうと思って、内々ないないは怖こわがっていました。
        </p>
      </div>
    </div>
  );
}

export default About;