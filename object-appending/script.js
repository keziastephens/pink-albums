console.log('the script is linked');

// object arrays
// array is defined with square brackets []
// objects are defined with curly brackets {}
// we seperate each property with a comma at the after the value
// eg id: 123,
// the last value in the object array doesnt need a comma
let objectArray = [
    {
        id: 1,
        artist: 'Mac Miller',
        album: 'Divine Feminine',
        price: 8,
        image: 'divine-feminine.png',
        info: 'The Divine Feminine is the fourth studio album by American rapper Mac Miller. It was released on September 16, 2016, by REMember Music and Warner Bros. Records. The album features guest appearances from Kendrick Lamar, Anderson .Paak, Ty Dolla Sign, and Ariana Grande, among others. The Divine Feminine was supported by three singles: "Dang!", "We", and "My Favorite Part". The album received generally positive reviews from critics and charted at number two on the US Billboard 200.',
        genre: 'rap',
        showAll: 'all'
    },
    {
        id: 2,
        artist: 'Bring Me The Horizon',
        album: 'Post Human: Survival Horror',
        price: 29.99,
        image: 'ph-sh.jpeg',
        info: 'Post Human: Survival Horror is a commercial release by British rock band Bring Me the Horizon. It was released on 30 October 2020. It was preceded by three singles: "Parasite Eve", "Obey", and "Teardrops". "Ludens", which was previously released as a single for the soundtrack Death Stranding: Timefall in November 2019, was also included in the track listing. The release was produced by frontman Oliver Sykes and keyboardist Jordan Fish, with additional production from composer Mick Gordon. It is intended to be the first in a series of four projects to be released by the band under the Post Human name. The release received generally positive reviews from critics, with some considering it a return to the heavier sound of the bands early material.',
        genre: 'metal',
        showAll: 'all'
    }, 
    {    
        id: 3,
        artist: 'Gus Dapperton',
        album: 'You Think Youre a Comic!',
        price: 9.99,
        image: 'you-think.jpg',
        info: 'You Think Youre a Comic! is the second official EP released by Gus Dapperton. It was made available February 11th, 2018 on Spotify, Apple Music, and soundcloud. It consists of 4 tracks and has received generally good reviews.',
        genre: 'indie',
        showAll: 'all'
    },
    {
        id: 4,
        artist: 'Bring Me The Horizon',
        album: 'Music To Listen To...',
        price: 39.99,
        image: 'music-to.jpeg',
        info: 'Music to Listen to~Dance to~Blaze to~Pray to~Feed to~Sleep to~Talk to~Grind to~Trip to~Breathe to~Help to~Hurt to~Scroll to~Roll to~Love to~Hate to~Learn to~Plot to~Play to~Be to~Feel to~Breed to~Sweat to~Dream to~Hide to~Live to~Die to~Go To (often abbreviated to Music to Listen To… or ~Go To~) is a commercial release by British rock band Bring Me the Horizon. It was released on 27 December 2019 without prior announcement. The release was produced by the bands vocalist Oliver Sykes and keyboardist Jordan Fish, and features collaborations with several artists including American singer Halsey and British band Yonaka.',
        genre: 'metal',
        showAll: 'all'
    },
    {
        id: 5,
        artist: 'Bjork',
        album: 'Post',
        price: 18.99,
        image: 'post.jpeg',
        info: 'Post is the second studio album by Icelandic singer Björk. It was released on 7 June 1995 by One Little Indian Records. Continuing the style developed on her first album Debut (1993), Post features an eclectic mixture of electronic and dance styles such as techno, trip hop, IDM, and house, but also ambient, jazz, industrial, and experimental music. Björk produced Post herself with co-producers including Nellee Hooper, 808 States Graham Massey, and former Massive Attack member Tricky. She wrote most of the songs after moving to London, and intended the album to convey the citys pace, urban culture, and underground club culture.',
        genre: 'industrial',
        showAll: 'all'
    },
    {
        id: 6,
        artist: 'Korn',
        album: 'Korn',
        price: 14.99,
        image: 'korn.jpg',
        info: 'Korn (printed and stylized as KoЯn) is the self-titled debut studio album by American nu metal band Korn. It was released on October 11, 1994, through Immortal/Epic Records. Before recording the album, the band was approached by Immortal/Epic Records after a performance at Huntington Beach, California. The band signed to their label because they did not want to "sign away all of their creative freedom".',
        genre: 'metal',
        showAll: 'all'
    },
    {
        id: 7,
        artist: 'Tyler The Creator',
        album: 'Igor',
        price: 21.99,
        image: 'igor.jpeg',
        info: 'Igor (stylized in all caps) is the fifth studio album[a] by American rapper and producer Tyler, the Creator. It was released on May 17, 2019, through Columbia Records. Produced entirely by Tyler himself, the album features guest appearances from Playboi Carti, Lil Uzi Vert, Solange, Kanye West, and Jerrod Carmichael. Preceding the release of Flower Boy (2017), the album was primarily recorded in California, with recording sessions also being held in Lake Como, Italy, and Atlanta between 2017 and 2019.',
        genre: 'rap',
        showAll: 'all'
    },
    {
        id: 8,
        artist: 'Joji',
        album: 'Ballads 1',
        price: 21.99,
        image: 'joji.png',
        info: 'Ballads 1 (stylized in all caps) is the debut studio album by Japanese singer-songwriter Joji. It serves as a follow-up to In Tongues EP, his first project as Joji, and Pink Season, his only album released under the now-retired alter-ego Pink Guy. It was released on 26 October 2018 through 88rising and 12Tone Music.[2] The album debuted at number three on the US Billboard 200 as well as number one on the US Top R&B/Hip-Hop Albums chart.',
        genre: 'lowfi',
        showAll: 'all'
    },
    {
        id: 9,
        artist: 'Doja Cat',
        album: 'Hot Pink',
        price: 24.99,
        image: 'hot-pink.png',
        info: 'Hot Pink is the second studio album by American rapper and singer Doja Cat. It was released on November 7, 2019, by Kemosabe and RCA Records. A departure from the sound of her debut album Amala (2018), Hot Pink is a pop and R&B record containing elements of funk, hip hop and soul. It was written by Doja Cat alongside other songwriters and producers, with production from Yeti Beats and Dr. Luke (under the pseudonym Tyson Trax). Guest vocals are contributed by Smino, Gucci Mane, and Tyga.',
        genre: 'pop',
        showAll: 'all'
    },
    {
        id: 10,
        artist: 'Paramore',
        album: 'After Laughter',
        price: 22.99,
        image: 'after-laughter.jpeg',
        info: 'After Laughter is the fifth studio album by American rock band Paramore. It was released on May 12, 2017, through Fueled by Ramen as a follow-up to Paramore, their 2013 self-titled album. The album was produced by guitarist Taylor York alongside previous collaborator, Justin Meldal-Johnsen. After Laughter represents a complete departure from the usual pop punk and alternative rock sound of their previous releases. The album touches on themes of exhaustion, depression and anxiety, contrasting the upbeat and vibrant sound of the record.',
        genre: 'pop',
        showAll: 'all'
    }
];

function objectArrayCardInfo(){
    // for loop - loops through specified code
    // declare a variable to act as a counter for when we are
    // looping through the code
    let i = 0;
    for(i =0; i < objectArray.length; i++){
        $('#cardContent').append(
            `
            <div class="card">
                <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${objectArray[i].artist}</h5>
                    <p class="card-text">${objectArray[i].album}</p>
                    <p class="card-text">${objectArray[i].price}</p>
                    <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                        Buy Now
                    </button>
                </div>
            </div> 

            `
        );
    };
};

function objectsLoop(){
    objectArrayCardInfo();


    $(".moreInformation").click(function(){
        let i = 0;
        for(i = 0; i<objectArray.length; i++){
            if(parseInt(this.id) === objectArray[i].id){
                // console.log("clicked");
                // console.log(objectArray[i].artist);
                // one way to clear data is by using the jquery function
                // empty() - it removes all child nodes from the selected element
                $("#exampleModalLongTitle").empty().append(
                    `
                    <h3>${objectArray[i].artist}</h3>
                    `
                );
                $("#objectArrayModalInfo").empty().append(
                    `
                    
                    <img class = "objectArrayModalImage" src="${objectArray[i].image}" alt="">
    
                    <h3 class="albumInfoModal">${objectArray[i].album}</h3>

                    <p class="modalTextInfo">${objectArray[i].info}</p>
                    `
                );
            }
        }
        // let i = 0; 
        // for(i = 0; i < objectArray.length; i++){
        //     if(parseInt(this.id) === objectArray[i].id){
        //         console.log(objectArray[i].name);
        //     };
        // };
    });


}
objectsLoop();

$("#metal, #rap, #pop, #industrial, #indie, #lowfi, #all").click(function(){
    $('#cardContent').empty();
    let i = 0;
    for(i=0; i <objectArray.length; i++){
        if(this.id === objectArray[i].genre){
            $('#cardContent').append(
                `
                <div class="card">
                    <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${objectArray[i].artist}</h5>
                        <p class="card-text">${objectArray[i].album}</p>
                        <p class="card-text">${objectArray[i].price}</p>
                        <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                            Buy Now
                        </button>
                    </div>
                </div> 
    
                `
            );
        } else if(this.id === objectArray[i].showAll){
            $('#cardContent').append(
                `
                <div class="card">
                <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${objectArray[i].artist}</h5>
                    <p class="card-text">${objectArray[i].album}</p>
                    <p class="card-text">${objectArray[i].price}</p>
                    <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                        Buy Now
                    </button>
                </div>
                    </div> 

                    `
            );
         };
    };
});

//radio btn data

const priceSubmit = document.querySelector("#priceSubmit");

function priceData(event){
    $('#cardContent').empty();
    event.preventDefault();

    let price = document.querySelector('input[name="price"]:checked').value
    console.log(price);

    let i = 0;
    for(i = 0; i < objectArray.length; i++){
        if(price === 'low' && objectArray[i].price <= 10 ){
            $('#cardContent').append(
                `
                <div class="card">
                <img class="card-img-top" src="${objectArray[i].image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${objectArray[i].artist}</h5>
                    <p class="card-text">${objectArray[i].album}</p>
                    <p class="card-text">${objectArray[i].price}</p>
                    <button id="${objectArray[i].id}" type="button" class="btn btn-primary moreInformation" data-toggle="modal" data-target="#exampleModalCenter">
                        Buy Now
                    </button>
                </div>
                    </div> 

                    `
            );
        };
    };


};

priceSubmit.addEventListener("click",priceData);


