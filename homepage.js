let kaislider = new BloggerScript({
        noImage: noThumbnail,
        sizeImage: 's320'
      })
          a = document.querySelector('.kaislider');
      function getkaislider(e) {
        let entry = kaislider.getFeed(e);
        let html = '<div class="loop owl-carousel full owl-loaded owl-drag">';
        entry.forEach(item => {
if ('content' in item) {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = item.content.replaceAll('src=', 'data-src=');

            //getElement
            let SecondImage = newDiv.querySelector('.bigcover img'),
                Synopsis = newDiv.querySelector('.synopsis'),
Dirilis = newDiv.querySelector('#dirilis');

            //getText
            secondImage = SecondImage ? SecondImage.dataset.src.replace(/\/s[0-9]\//, `/s720/`) : item.image;
            synopsis = Synopsis ? Synopsis.innerText.slice(0, 200) : 'No Synopsis',
dirilis = Dirilis ? Dirilis.innerText.slice(0, 20) : 'Unknown';
          }
          let score = item.label.find(i => /^(\d+)\.(\d+)$/.test(i)) || 'N/A',
              status = item.label.find(i => kaiStatus.some(s => s == i)),
              tipe = item.label.find(i => kaiTipe.some(s => s == i));
          html += `<div class="slide-item full"><div class="slide-bg"><img src="${noThumbnail}" data-src="${secondImage}" class="ts-post-image wp-post-image attachment-medium size-medium lazy" loading="lazy" title="${item.title}" alt="${item.title}" width="145" height="205"></div><div class="slide-shadow"></div><div class="slide-content"><div class="poster" style="position:relative"> <a href="${item.link}"><img src="${noThumbnail}" data-src="${item.image}" class="ts-post-image wp-post-image attachment-medium size-medium lazy" loading="lazy" title="${item.title}" alt="${item.title}" width="145" height="205"></a></div><div class="info-left"><div class="title"><div class="rating"><div class="vote"><div class="site-vote"> <span class="fa fa-star" aria-hidden="true"><span>${score}</span></span></div></div></div> <span class="ellipsis"><a href="${item.link}">${item.title}</a></span> <span class="release-year">${dirilis}</span></div>`;
                if (item.label.some(i => kaiGenre.includes(i))) {
                  let filter = item.label.filter(i => kaiGenre.includes(i));
                  html += `<div class="extras"><div class="extra-category">`;
                  filter.forEach((label, indexz) => {
                    html += `<a href="${item.link}">${label}</a>`;
                    if (filter.length - 1 != indexz) html += ', ';
                  })
                html += `</div></div>`;
                html += `<div class="excerpt"> <span class="title">SUMMARY</span><p>${synopsis}</p></div>`;
                html += `<div class="cast"> `;
                if (status) {
                    html += `<span class="director"> <strong>Status:</strong> ${status}</span> `;
                }
                if (tipe) {
                    html += `<span class="actor"><strong>Type:</strong> <a href="${item.link}" rel="tag">${tipe}</a></span>`;
                }
                  html += `</div>`;
                }
                html += `</div></div></div>`;
        });
        if (a) {
          a.innerHTML = `${html} </div>`;
          $('.owl-carousel').owlCarousel({
            loop:true,
            dots:true,
            lazyLoad: true,
            autoplay:true,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:1
                }
            }
          })
        }
      }
      if (a) {
        let jlh = a.dataset.jumlah || 10,
KsliderLabel = a.dataset.label || false;
        kaislider.xhr('GET', `/feeds/posts/default${KsliderLabel == false ? '' : `/-/${KsliderLabel}`}?alt=json-in-script&max-results=${jlh}`, getkaislider);
      }
const apiEndpoint = "https://api.jikan.moe/v4/top/anime";

// Get the anime grid element and next page button element from the HTML DOM
const animeGrid = document.getElementById("anime-grid");
const nextPageButton = document.getElementById("next-page-button");

// Set the initial page number and limit for the API endpoint
let page = 1;
const limit = 20;

// Fetch the top anime from the API and generate the anime grid
function fetchAnime() {
  // Update the API endpoint with the current page and limit
  const updatedEndpoint = `${apiEndpoint}?page=${page}&limit=${limit}`;

  // Fetch the anime data from the updated API endpoint
  fetch(updatedEndpoint)
    .then(response => response.json())
    .then(data => {
      // Loop through the anime data and create an HTML element for each anime
      data.data.forEach(anime => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("bs");
        animeItem.innerHTML = `
          <div class="bsx"><a href="/search?q=${anime.title}"><div class="the limit"><img class="" src="${anime.images.webp.large_image_url}" alt="${anime.title}"><div class="ply"><i class="far fa-play-circle"></i></div><span class="tpe"><span class="type ${anime.type}"></span><span class="typez ${anime.type}">${anime.type}</span></span><div class="bt"><span class="epx ${anime.episodes}">${anime.episodes} Episode</span></div></div><div class="tt" style="height:60px" title="${anime.title}"><span class="ntitle">${anime.title}</span><div class="adds"><div class="epxs undefined">undefined</div><div class="rating 6.67"><div class="rating-prc"><div class="rtp"><div class="rtb mal"><span style="width:${anime.score}%"></span></div></div></div><div class="kaiscore" content="${anime.score}">${anime.score}</div></div></div></div></a>
          </div>
        `;
        animeGrid.appendChild(animeItem);
      });

      // Enable the next page button if there are more pages of anime to fetch
      if (data.meta.next_page !== null) {
        nextPageButton.disabled = false;
      }
    })
    .catch(error => console.error(error));
}

// Fetch the initial page of anime
fetchAnime();

// Add an event listener to the next page button
nextPageButton.addEventListener("click", () => {
  // Increment the page number and fetch the next page of anime
  page++;
  fetchAnime();
  
  // Disable the next page button until the next page of anime is loaded
  nextPageButton.disabled = true;
});

const today = new Date();
const schid = {
  start: Math.floor(today.getTime() / 1000),
  end: Math.floor(new Date().setDate(today.getDate() + 1) / 1000),
  page: 1,
  perPage: 20
};
var query = `
query ($page: Int, $perPage: Int, $start: Int, $end: Int) {
  Page(page: $page, perPage: $perPage) {
    airingSchedules(airingAt_greater: $start, airingAt_lesser: $end, sort: TIME) {
      id
      media {
        id
        title {
          romaji
          english
        }
        format
        coverImage {
          color
          large
        }
      }
      episode
      timeUntilAiring
    }
  }
}
`;
const url = "https://graphql.anilist.co/v2",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: query,
      variables: schid
    })
  };

async function anisch() {
  const data = await (await fetch(url, options)).json();
  renderToPage(data.data.Page.airingSchedules);
}
const template = document.querySelector("template#anime-template").content;

function renderToPage(anime) {
  const nodes = anime.map((item) => {
    const node = template.cloneNode(true);
    node.querySelector("[data-episode]").textContent =
      "" + item.episode;
    node.querySelector('[data-item="romaji"]').textContent =
      item.media.title.romaji;
    node.querySelector('[data-item="image"]').src = item.media.coverImage.large;
    node.querySelector("[data-airing]").dataset.airing =
      today.getTime() + Number(item.timeUntilAiring * 1200);
    return node;
  });

  document.querySelector(".kaischedule").append(...nodes);
}

anisch();

function updateTimes() {
  const current = Date.now();
  document.querySelectorAll("[data-airing]").forEach((item) => {
    const target = Number(item.dataset.airing);
    const diff = target - current;
    item.textContent = timeArray.reduce(
      ([string, remaining], next) => {
        const value = Math.floor(remaining / next.time);
        remaining -= value * next.time;
        string += `${value}${next.label} `;
        return [string, remaining];
      },
      ["", diff]
    )[0];
  });
  requestAnimationFrame(updateTimes);
}

requestAnimationFrame(updateTimes);

const timeArray = [
  {
    label: "h",
    time: 1000 * 60 * 60
  },
  {
    label: "min",
    time: 1000 * 60
  },
  {
    label: "sec",
    time: 1000
  }
];
jQuery(document).ready(function($){ $("#kaitab > div:visible").hide(); $("select-tab li:first a").addClass("selected").show(); $("#kaitab div:first").show(); $("#select-tab li a").click(function() { $("#select-tab li a").removeClass("selected a"); $(this).addClass("selected"); $("#kaitab > div").hide(); var activeTab = $(this).attr("href"); $(activeTab).fadeIn(0); return false; }); });
e.randomPost("/feeds/posts/summary/-/Series",function(s){let a={};e.config.label.filter(l=>{s.filter(s=>{s.label.some(s=>s==l)&&(a[l]?a[l].push(s):a[l]=[s])})}),window.matchMedia("(max-width: 600px)").matches&&(e.config.maxTab=3);let l='<div class="series-gen">',i='<div class="seriesku"><ul class="nav-tabs">',t="",c=e.shuffle(Object.keys(a)).slice(0,e.config.maxTab).sort().reduce((s,l)=>(s[l]=a[l],s),{});for(let d in c)if(Object.hasOwnProperty.call(c,d)){let n=e.shuffle(c[d]).slice(0,e.config.jumlah);i+=`<li><a data-id="series-${d.replace(/\W/g,"").toLowerCase()}">${d}</a></li>`,t+=`<div id="series-${d.replace(/\W/g,"").toLowerCase()}" class="tab-pane">`,n.forEach(s=>{let a=s.title,l=s.label.find(s=>!/[^0-9\.-]+/g.test(s))||s.label.find(s=>s.includes("Score"))?.split(" ")[1]||"undefined",i=s.link,c=s.label.find(s=>kaiStatus.some(a=>a==s)),d=s.label.find(s=>{if(kaiEps.some(a=>s.includes(a)))return s}),n=s.label.find(s=>kaiTipe.some(a=>a==s)),r=s.image,_=s.label.find(s=>["hot"].includes(s))||!1,o=s.label.find(s=>["Lock"].includes(s))||!1;t+=`<div class="bs"><div class="bsx"><a href="${i}" title="${a}">`,t+='<div class="limit"><div class="ply"><i class="far fa-play-circle"></i></div>',c&&(t+=`<div class="bt"><span class="epx ${d}">${d.replace("Ep","Episode")}</span><span class="sb" style="display: block;float: right;padding: 0 5px;font-size: 11px;background: rgba(14,175,193,.8);color: #fff;">${c.replace("Completed","Selesai ✓")}</span></div>`),t+=`<img class="lazy" data-src="${r}" src="${noThumbnail}" alt="${a}" loading="lazy"/>`,n&&(t+=`<span class="typez ${n}">${n}</span><div class="${o} none">
<span class="block p-2 text-center mt-[-8px] text-xs text-[#54ff94] grid self-center justify-items-center"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.825.588-1.413Q5.175 8 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1t3.538 1.462Q17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10v10q0 .825-.587 1.413Q18.825 22 18 22Zm0-2h12V10H6v10Zm6-3q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6ZM6 20V10v10Z" fill="currentColor"></path></svg>This items locked by Admin</span>
</div>`),_&&(t+=`<span class="absolute po nsfw" style="background-image: url(${r})"></span>`),t+="</div>",t+=`<div class="bigor"><div class="tt">${a}</div><div class="adds"><div class="rating ${l}"><div class="rating-prc"><div class="rtp"><div class="rtb"><span style="width:${4==l.length?"10.0"==l?l.replace(".",""):l.replace(".","").slice(0,-1):l.replace(".","")}%"></span></div></div>`,t+=`</div><div class="numscore" content="${l}">${l}</div></div></div></div>`,t+="</a></div></div>"}),t+="</div>"}l+=`${i}</ul></div>${'<div class="">'+t}</div></div>`,document.getElementById("TBReko").innerHTML=l;let r=document.querySelectorAll("[data-id*=series");r.forEach(s=>{s.parentElement.addEventListener("click",s=>{let a=s.currentTarget.querySelector("a").dataset.id;r.forEach(s=>s.parentElement.classList.remove("active")),s.currentTarget.classList.add("active"),document.querySelectorAll(".tab-pane").forEach(s=>s.classList.remove("active")),document.getElementById(a).classList.add("active")})}),r[0].click()});

const bloglist=new BloggerScript({noImage:noThumbnail,sizeImage:"s640"});function getbloglist(t){let e=bloglist.getFeed(t),l="";e.forEach(t=>{let e=t.label.find(t=>e=>e==t),a=document.createElement("div");a.innerHTML="content"in t?t.content:"Tidak ada Content";let i=a.innerText.slice(0,150);l+=`<article class="blogbox hentry"><div class="innerblog"><div class="thumb"><a href="${t.link}" title="${t.title}"><img src="${noThumbnail}" width="225" height="150" data-src="${t.image}" class="lazy" alt="${t.title}" decoding="async" loading="lazy" itemprop="image" title="${t.title}"/>`,e&&(l+=`<span class="btags">${e}</span>`),l+=`</a></div><div class="infoblog"><div class="entry-header"><h2 class="entry-title"><a href="${t.link}" title="${t.title}" itemprop="url">${t.title}</a></h2></div><div class="entry-content"><p>${i}</p></div><div class="entry-meta"><span class="author vcard"><i class="far fa-user"></i> <i class="fn">${t.author.name}</i></span> \xb7 <span><i class="far fa-clock"></i> ${t.date}</span></div></div></div></article>`}),bl&&(bl.innerHTML=l)}if(bl=document.querySelector(".bloglist")){let t=bl.dataset.label||!1;bloglist.xhr("GET",`/feeds/posts/default${!1==t?"/-/Series":`/-/${t}`}?alt=json-in-script&max-results=6`,getbloglist)}
