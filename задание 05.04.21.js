функция  Запомни фильмы ( ) {
    для (пусть i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        если (a != null && b != null && a != " && b != " && a.длина < 50) {
            personalMovieDB.movies[a] = b;
            console.log('готово');
        } еще {
            console.log('ошибка');
            я...;
        }
    } 
}
Помните фильмы ( ) ;
функция  detectPersonalLevel ( ) {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } еще {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel ( ) ;
функция  writeYourGenres ( ) {
    для ( пусть  i  =  1 ;  i  <=  3 ;  i ++ ) {
        personalMovieDB . genres [ i  -  1 ]  =  prompt ( `Ваш любимый жанр номер $ { i } ` ) ;
    }
}
writeYourGenres ( ) ;
© 2021 GitHub, Inc.