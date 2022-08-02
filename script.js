const reviews = [
    {
        name: 'Name1',
        job: 'Web Developer',
        img: 'yu.png',
        text: 'I am a web developer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque illum et consequatur reiciendis quia repudiandae dolorem perferendis ipsam quisquam.'
    },
    {
        name: 'Name2',
        job: 'Web Designer',
        img: 'gt.png',
        text: 'I am a web designer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque illum et consequatur reiciendis quia repudiandae dolorem perferendis ipsam quisquam.'
    },
    {
        name: 'Name3',
        job: 'Content writer',
        img: 'productivity.png',
        text: 'I am a content writer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque illum et consequatur reiciendis quia repudiandae dolorem perferendis ipsam quisquam.'
    },
    {
        name: 'Name4',
        job: 'Software Engineer',
        img: 'flowing-conversations.png',
        text: 'I am a software engineer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, eaque illum et consequatur reiciendis quia repudiandae dolorem perferendis ipsam quisquam.'
    }
];

const author = document.querySelector('img');
const nameId = document.querySelector('h3');
const job = document.querySelector('.job');
const content = document.querySelector('.content');
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
const random = document.querySelector('.random')
let contentId = 0;


window.addEventListener('DOMContentLoaded', showContent)
pre.addEventListener('click', previousContent);
next.addEventListener('click', nextContent);
random.addEventListener('click', randomContent);

function previousContent() {
    contentId--;
    if (contentId < 0) {
        contentId = reviews.length - 1
    };
    showContent()

}

function nextContent() {
    contentId ++;
    if (contentId > reviews.length - 1) {
        contentId = 0;
    };
    showContent()

}

function randomContent() {
    contentId = Math.floor(Math.random() * reviews.length)
    showContent()
}
function showContent(){
   nameId.textContent = reviews[contentId].name;
   job.textContent = reviews[contentId].job;
   author.src = reviews[contentId].img;
   content.textContent = reviews[contentId].text;
}
