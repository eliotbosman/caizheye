function index() {
    var i = document.getElementsByClassName('i')[0];
    var container = document.getElementsByClassName('container')[0];
    var b3 = document.getElementsByClassName('index-btn')[0];
    var b1 = document.getElementsByClassName('b1')[0];
    var b2 = document.getElementsByClassName('b2')[0];
    i.style.display = "grid"; i.style.animation = "fade-in ease 2s";
    b1.style.display = "none"; b2.style.display = "inline"; b3.style.display="inline";
    container.style.display = "none";
}

function grid() {
    var i = document.getElementsByClassName('i')[0];
    var container = document.getElementsByClassName('container')[0];
    var project = document.getElementsByClassName('project')[0];
    var b1 = document.getElementsByClassName('b1')[0];
    var b2 = document.getElementsByClassName('b2')[0];
    container.style.display = "grid"; container.style.animation = "fade-in ease 2s";
    b1.style.display = "inline"; b2.style.display = "none";
    i.style.display = "none"; project.style.display="none"; container.style.display= "grid";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function upwards() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      var contact = document.getElementsById('contact');
      contact.style.background = "black";
      contact.style.transition = "all 1.2s";
}

function downwards() {

    window.scrollTo({
        top: 5000,
        left: 0,
        behavior: 'smooth'
      });
}

function project() {
    var p = document.getElementsByClassName('project')[0];
    var h = document.getElementsByClassName('container')[0];
    h.style.display = "none";
    p.style.display = "grid";
    p.style.animation = "fade-in 1.2s ease";
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

function home() {
    var p = document.getElementsByClassName('project')[0];
    var h = document.getElementsByClassName('container')[0];
    var i = document.getElementsByClassName('i')[0];
    i.style.display = "none";
    p.style.display = "none";
    h.style.display = "grid";
    h.style.animation = "fade-in 1.2s ease";
    
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}





/* Activates G1 */ 
function speed() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "grid"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Speed Drifters";
    txt.innerHTML = "<p>Driving go-karts is part of my life and my greatest passion. The billboard of a karting club I frequented had long since fallen into disrepair from lack of repair and seemed to be failing. So I planned to design some visuals for the track to bring it back to its glory.</p>";
    s.innerHTML = "Type Design, Visual Identity ❋";
    img.src = "img/Speed Drifters/Racetrack/Speed Drifters_19.jpg";
    i1.src="img/Speed Drifters/Posters/Speed Drifters_28.jpg"; i2.src="img/Speed Drifters/Posters/Speed Drifters_29.jpg"; i3.src="img/Speed Drifters/Posters/Speed Drifters_30.jpg"; i4.src="img/Speed Drifters/Posters/Speed Drifters_31.jpg";
    i5.src="img/Speed Drifters/Publication/Speed Drifters_33.jpg"; i6.src="img/Speed Drifters/Publication/Speed Drifters_36.jpg"; i7.src="img/Speed Drifters/Publication/Speed Drifters_39.jpg"; i8.src="img/Speed Drifters/Publication/Speed Drifters_42.jpg";
    i9.src="img/Speed Drifters/Publication/Speed Drifters_57.jpg"; i10.src="img/Speed Drifters/Publication/Speed Drifters_60.jpg"; i11.src="img/Speed Drifters/Publication/Speed Drifters_54.jpg"; i12.src="img/Speed Drifters/Publication/Speed Drifters_58.jpg";
    i13.src="img/Speed Drifters/Racetrack/Speed Drifters_5.jpg"; i14.src="img/Speed Drifters/Racetrack/Speed Drifters_4.jpg"; i15.src="img/Speed Drifters/Racetrack/Speed Drifters_3.jpg"; i16.src="img/Speed Drifters/Racetrack/Speed Drifters_2.jpg";
}

/* Activates G2 */ 
function tyre() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "grid"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Tyre Rubber";
    txt.innerHTML = "<p>I used tire rubber for an experimental ex- periment, using the characteristics of tire rubber with a sense of adhesion and the shape of contrasting thickness as font highlights, and finally, making it digital.</p>";
    s.innerHTML = "Type Design, Visual Identity ❋";
    img.src = "img/Tyre Rubber/Posters/Tyre Rubber_7.jpg";
    i1.src="img/Tyre Rubber/Posters/Tyre Rubber_3.jpg"; i2.src="img/Tyre Rubber/Posters/Tyre Rubber_7.jpg"; i3.src="img/Tyre Rubber/Posters/Tyre Rubber_13.jpg"; i4.src="img/Tyre Rubber/Posters/Tyre Rubber_26.jpg";
    i5.src="img/Tyre Rubber/Letterprints/Tyre Rubber_51.jpg"; i6.src="img/Tyre Rubber/Letterprints/Tyre Rubber_54.jpg"; i7.src="img/Tyre Rubber/Letterprints/Tyre Rubber_55.jpg"; i8.src="img/Tyre Rubber/Letterprints/Tyre Rubber_49.jpg";
    i9.src="img/Tyre Rubber/Posters/Tyre Rubber_13.jpg"; i10.src="img/Tyre Rubber/Posters/Tyre Rubber_26.jpg"; i11.src="img/Tyre Rubber/Posters/Tyre Rubber_47.jpg"; i12.src="img/Tyre Rubber/Posters/Tyre Rubber_29.jpg";
    i13.style.display="none"; i14.style.display="none"; i15.style.display="none"; i16.style.display="none";
}

/* Activates G3 */ 
function hole() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "grid";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Watch Out! Hole Here!";
    txt.innerHTML = "<p>I have helped my grandmother set up a small non-profit organization. To desen- sitize the elderly to fraudulent health fraud products, I designed a series of banners, posters, and VI guidance to constantly emphasize and mock at the “magic effects“ of the products. In China, a very large number of elderly people are suffering from fraud, among which false sales of health products is the most serious problem, and many elderly people are suffering from it.</p> <p>Shoes, cups, pillows. These are the main categories of fake products that scam- mers promote, related to everyday life and endowed with health benefits that sound incredible to them. I printed a flag more than ten meters long, hanging down from the roof of my grandmother‘s house, and installed an iron doorway on the outside wall to be used for fraud prevention charity organization, and we organized a small exhibition in the yard about fraudulent items. Grandmother is introducing the real situation of the product to other elderly people who wish to know the information about the scam, the scam techni- que, and hope to make similar scams less frequent.</p>";
    img.src = "img/Watch Out! Hole Here!/WOHH_1.jpg";
    s.innerHTML = "Poster, Exhibition ❋";
    i1.src="img/Watch Out! Hole Here!/WOHH_5.jpg"; i2.src="img/Watch Out! Hole Here!/WOHH_11.jpg"; i3.src="img/Watch Out! Hole Here!/WOHH_18.jpg"; i4.src="img/Watch Out! Hole Here!/WOHH_20.jpg";
    i5.src="img/Watch Out! Hole Here!/WOHH_19.jpg"; i6.src="img/Watch Out! Hole Here!/WOHH_24.jpg"; i7.src="img/Watch Out! Hole Here!/WOHH_6.jpg"; i8.src="img/Watch Out! Hole Here!/WOHH_28.jpg";
    i9.src="img/Watch Out! Hole Here!/WOHH_21.jpg"; i10.src="img/Watch Out! Hole Here!/WOHH_12.jpg"; i11.src="img/Watch Out! Hole Here!/WOHH_9.jpg"; i12.src="img/Watch Out! Hole Here!/WOHH_3.jpg";
    i13.src="img/Watch Out! Hole Here!/WOHH_7.jpg"; i14.src="img/Watch Out! Hole Here!/WOHH_13.jpg"; i15.src="img/Watch Out! Hole Here!/WOHH_22.jpg"; i16.src="img/Watch Out! Hole Here!/WOHH_2.jpg";
}

/* Activates G4 */ 
function factory() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "grid"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Memories Of The Factory";
    txt.innerHTML = "<p>When I was a child, my father always took me to the factory to do my homework and wait for him to finish his work. I would wander around the factory, excitedly observing every corner. Howe- ver, the factory was abandoned, so I intended to use college to find my childhood memories again.</p><p>I tried to use some brush strokes or materials to express the roar of these machines that kept flashing in my mind.When these familiar images collide with Documentation Book the abstract brushstrokes transformed in my mind, it‘s like a spark bursting out of a machine production.</p>";
    img.src = "img/Memories Of The Factory/Exhibition/MC_16.jpg";
    s.innerHTML = "Collage, Poster, Publication ❋";
    i1.src="img/Memories Of The Factory/Exhibition/MC_2.jpg"; i2.src="img/Memories Of The Factory/Exhibition/MC_6.jpg"; i3.src="img/Memories Of The Factory/Exhibition/MC_12.jpg"; i4.src="img/Memories Of The Factory/Exhibition/MC_17.jpg";
    i5.src="img/Memories Of The Factory/Posters/MC_26.jpg"; i6.src="img/Memories Of The Factory/Posters/MC_27.jpg"; i7.src="img/Memories Of The Factory/Posters/MC_28.jpg"; i8.src="img/Memories Of The Factory/Posters/MC_29.jpg";
    i9.src="img/Memories Of The Factory/Posters/MC_30.jpg"; i10.src="img/Memories Of The Factory/Posters/MC_31.jpg"; i11.src="img/Memories Of The Factory/Posters/MC_32.jpg"; i12.src="img/Memories Of The Factory/Posters/MC_33.jpg";
    i13.src="img/Memories Of The Factory/Exhibition/MC_19.jpg"; i14.src="img/Memories Of The Factory/Exhibition/MC_13.jpg"; i15.src="img/Memories Of The Factory/Exhibition/MC_12.jpg"; i16.src="img/Memories Of The Factory/Exhibition/MC_7.jpg";
}

/* Activates G5 */ 
function nightmare() {
    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "grid"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";
    
    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Descent Into Nightmare";
    txt.innerHTML = "<p>As a child, I was always afraid of particular things and often had nightmares associated to them, so I combined some everyday items with my demons in the form of collage and illus- tration. Through this project, I hope to confront my fears.</p>";
    s.innerHTML = "Illustration ❋";
    img.src = "img/Dongba/Behind The Scenes/DIN_9.jpg";
    i1.src="img/Descent Into Nightmare/Poster/DIN_16.jpg"; i2.src="img/Descent Into Nightmare/Poster/DIN_17.jpg"; i3.src="img/Descent Into Nightmare/Poster/DIN_18.jpg"; i4.src="img/Descent Into Nightmare/Poster/DIN_19.jpg";
    i5.src="img/Descent Into Nightmare/Poster/DIN_20.jpg"; i6.src="img/Dongba/Behind The Scenes/DIN_9.jpg"; i7.src="img/Descent Into Nightmare/Poster/DIN_21.jpg"; i8.src="img/Descent Into Nightmare/Poster/DIN_22.jpg";
    i9.src="img/Descent Into Nightmare/Poster/DIN_23.jpg"; i10.src="img/Descent Into Nightmare/Poster/DIN_24.jpg"; i11.src="img/Descent Into Nightmare/Poster/DIN_25.jpg"; i12.src="img/Descent Into Nightmare/Poster/DIN_26.jpg";
    i13.style.display="none"; i14.style.display="none"; i15.style.display="none"; i16.style.display="none";
}

/* Activates G6 */ 
function picaso() {
    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "grid";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Picaso";
    txt.innerHTML = "<p>Using the works of Picasso's black period as inspiration, the sharp angles and soft curves in the painting are used as a source of inspira- tion to design a font with a sense of image and inscription.</p>";
    s.innerHTML = "Atlas, Typography ❋";
    img.src = "img/Picaso/Publication/Picasso_EDIT.jpg";
    i1.src="img/Picaso/Publication/Picasso_4.jpg"; i2.src="img/Picaso/Publication/Picasso_5.jpg"; i3.src="img/Picaso/Publication/Picasso_6.jpg"; i4.src="img/Picaso/Publication/Picasso_7.jpg";
    i5.src="img/Picaso/Publication/Picasso_8.jpg"; i6.src="img/Picaso/Poster/Picasso_1.jpg"; i7.src="img/Picaso/Publication/Picasso_10.jpg"; i8.src="img/Picaso/Publication/Picasso_11.jpg";
    i9.src="img/Picaso/Publication/Picasso_9.jpg"; i10.src="img/Picaso/Publication/Picasso_12.jpg"; i11.src="img/Picaso/Publication/Picasso_13.jpg"; i12.src="img/Picaso/Poster/Picasso_2.jpg";
    i13.src="img/Picaso/Publication/Picasso_14.jpg"; i14.src="img/Picaso/Publication/Picasso_15.jpg"; i15.src="img/Picaso/Publication/Picasso_16.jpg"; i16.style.display="img/Picaso/Publication/Picasso_17.jpg";
}

/* Activates G7 */ 
function song() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "grid"; nxt8.style.display = "none"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Song";
    txt.innerHTML = "<p>Driving go-karts is part of my life and my greatest passion. The billboard of a karting club I frequented had long since fallen into</p> <p>disrepair from lack of repair and seemed to be failing. So I planned to de- sign some visuals for the track to bring it back to its glory.</p>";
    s.innerHTML = "Typography, Textile Print, Poster ❋"
    img.src = "img/Song/Song_EDIT.jpg";
    i1.src="img/Song/Posters/Song_15.jpg"; i2.src="img/Song/Posters/Song_16.jpg"; i3.src="img/Song/Posters/Song_17.jpg"; i4.src="img/Song/Posters/Song_18.jpg";
    i5.src="img/Song/Scarf/Song_22.jpg"; i6.src="img/Song/Scarf/Song_23.jpg"; i7.src="img/Song/Scarf/Song_24.jpg"; i8.src="img/Song/Scarf/Song_25.jpg";
    i9.src="img/Song/Scarf/Song_26.jpg"; i10.src="img/Song/Screenprint/Song_2.jpg"; i11.src="img/Song/Screenprint/Song_9.jpg"; i12.src="img/Song/Screenprint/Song_10.jpg";
    i13.style.display="none"; i14.style.display="none"; i15.style.display="none"; i16.style.display="none";
}

function dongba() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "grid"; nxt9.style.display = "none";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Dongba";
    txt.innerHTML = "<p>Dongba script is a hieroglyphic script used by the Naxi ethnic minority living in eastern Tibet and northern Yunnan Provin- ce. I tried to chronically sort out the de- velopment of Dongba script in the form of an atlas, and made a dictionary of Dongba script with retrieval function.</p>";
    s.innerHTML = "Atlas, Typography ❋";
    img.src = "img/Dongba/Publication/Dongba_36.jpg";
    i1.src="img/Dongba/Publication/Dongba_3.jpg"; i2.src="img/Dongba/Publication/Dongba_4.jpg"; i3.src="img/Dongba/Publication/Dongba_5.jpg"; i4.src="img/Dongba/Publication/Dongba_6.jpg";
    i5.src="img/Dongba/Publication/Dongba_7.jpg"; i6.src="img/Dongba/Publication/Dongba_8.jpg"; i7.src="img/Dongba/Publication/Dongba_9.jpg"; i8.src="img/Dongba/Publication/Dongba_10.jpg";
    i9.src="img/Dongba/Publication/Dongba_11.jpg"; i10.src="img/Dongba/Publication/Dongba_12.jpg"; i11.src="img/Dongba/Publication/Dongba_13.jpg"; i12.src="img/Dongba/Publication/Dongba_14.jpg";
    i13.src="img/Dongba/Publication/Dongba_32.jpg"; i14.src="img/Dongba/Publication/Dongba_33.jpg"; i15.src="img/Dongba/Publication/Dongba_34.jpg"; i16.src="img/Dongba/Publication/Dongba_35.jpg";
}

function dreams() {

    var nxt1 = document.getElementById('btn-tyre'); 
    var nxt2 = document.getElementById('btn-hole'); 
    var nxt3 = document.getElementById('btn-factory'); 
    var nxt4 = document.getElementById('btn-nightmare'); 
    var nxt5 = document.getElementById('btn-picaso'); 
    var nxt6 = document.getElementById('btn-song'); 
    var nxt7 = document.getElementById('btn-dongba'); 
    var nxt8 = document.getElementById('btn-dreams'); 
    var nxt9 = document.getElementById('btn-speed'); 
    nxt1.style.display = "none"; nxt2.style.display = "none"; nxt3.style.display = "none";
    nxt4.style.display = "none"; nxt5.style.display = "none"; nxt6.style.display = "none";
    nxt7.style.display = "none"; nxt8.style.display = "none"; nxt9.style.display = "grid";

    var txt = document.getElementsByClassName('p-txt')[0];
    var h1 = document.getElementsByClassName('p-h1')[0];
    var img = document.getElementsByClassName('p-img')[0];
    var s = document.getElementsByClassName('p-s')[0];
    var i1 = document.getElementById('p-img1'); var i2 = document.getElementById('p-img2');
    var i3 = document.getElementById('p-img3'); var i4 = document.getElementById('p-img4');
    var i5 = document.getElementById('p-img5'); var i6 = document.getElementById('p-img6');
    var i7 = document.getElementById('p-img7'); var i8 = document.getElementById('p-img8');
    var i9 = document.getElementById('p-img9'); var i10 = document.getElementById('p-img10');
    var i11 = document.getElementById('p-img11'); var i12 = document.getElementById('p-img12');
    var i13 = document.getElementById('p-img13'); var i14 = document.getElementById('p-img14');
    var i15 = document.getElementById('p-img15'); var i16 = document.getElementById('p-img16');
    h1.innerHTML = "Home, Dreams, Happiness, Gifts, Friends";
    txt.innerHTML = "<p>I cooperated with a local kindergarten, inviting children aged 3-6 answer some questions through drawings and inter- views. Their parents also answered them in words. Through comparing 150 chil- dren’s paintings and parents’ written ans- wers, I have produced 300 posters and a 640-page book. I hope that some parents can think about what is the most import- ant thing in our life.</p>";
    s.innerHTML = "Publication, Exhibition ❋";
    img.src = "img/Dream Family/Exhibition/DFH_52.jpg";
    i1.src="img/Dream Family/Publication/DFH_1.jpg"; i2.src="img/Dream Family/Publication/DFH_2.jpg"; i3.src="img/Dream Family/Exhibition/DFH_24.jpg"; i4.src="img/Dream Family/Publication/DFH_3.jpg";
    i5.src="img/Dream Family/Publication/DFH_4.jpg"; i6.src="img/Dream Family/Exhibition/DFH_26.jpg"; i7.src="img/Dream Family/Publication/DFH_5.jpg"; i8.src="img/Dream Family/Publication/DFH_6.jpg";
    i9.src="img/Dream Family/Publication/DFH_11.jpg"; i10.src="img/Dream Family/Book View/DFH_66.jpg"; i11.src="img/Dream Family/Exhibition/DFH_28.jpg"; i12.src="img/Dream Family/Exhibition/DFH_33.jpg";
    i13.src="img/Dream Family/Book View/DFH_71.jpg"; i14.src="img/Dream Family/Publication/DFH_18.jpg"; i15.src="img/Dream Family/Exhibition/DFH_61.jpg"; i16.src="img/Dream Family/Exhibition/DFH_65.jpg";
}