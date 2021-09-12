var song = {                                        // Object "song" has 8 properties, 2 of these are methods
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        if (!this.playing) {                      // What does the "!" do?  If set playing:true, remove "!" then both outputs generate, same as in original code.  
            this.playing = true;                  // So... when, playing:false & play! has true & pause has false = both outputs showing
        console.log("Playing "                    //             playing:false & play has true & pause has false = NO outputs showing
            + this.name + " by " + this.artist);  //             playing:true & play! has true & pause has false = only Pause output showing
        }                                         //             playing:true & play has true & pause has false = both outputs showing.
    },                                            // so what is the point in the !this thingummy???
    pause: function() {
        if (this.playing) {
            this.playing = false;
            console.log("NOT playing "
            + this.name + " by " + this.artist);
            }
        }
    };
    song.play();
    song.pause();
