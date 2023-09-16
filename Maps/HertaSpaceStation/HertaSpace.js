document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
    document.getElementById('con1').style.backgroundColor = 'yellow';
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    document.getElementById('con1').style.backgroundColor = 'brown';
}

document.getElementById("myaudio").volume = 0.6