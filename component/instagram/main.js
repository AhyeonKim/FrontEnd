console.log('instagram')

const POSTS = [
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/130813227_236726834687521_8580188627487009367_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=6nBPmKVbdFMAX_q8fpG&tp=1&oh=704dbd85aa86e5278baf085f0d5d4a22&oe=60261A51',
        likes: 10,
        comments: 20
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.180.1440.1440a/s640x640/124830906_384389852784518_2148796855384089975_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=Hb2us1G3-3AAX9hqPKQ&tp=1&oh=4a6c3cb6d86d62cee4df5e6214a41d57&oe=60270CAC',
        likes: 50,
        comments: 5
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/92811403_275877566759647_3311021553559077491_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=107&_nc_ohc=N7f4TN_obM8AX91wjJu&tp=1&oh=ef0030937c288ff9293dc9f1503d8e4b&oe=60262062',
        likes: 39,
        comments: 3
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/36604684_379641412559352_6209929596507258880_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=JVvrKE9tg40AX9Pz_HH&tp=1&oh=01e47a3a42e050fdd0feeaa059fa0e44&oe=60265192',
        likes: 12,
        comments: 16
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/91024906_2528556064138933_6611408845076775518_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=4cpR9pfx7uwAX_26cFC&tp=1&oh=a2beff79a4fda05ff7379c28984a1e6f&oe=602630C3',
        likes: 17,
        comments: 1
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/56977099_449330745806537_2750877505851797249_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=E3TXQqI28iEAX92tZld&tp=1&oh=e0f66155e9f7081ebcb276fcebac4b93&oe=6025A0D9',
        likes: 22,
        comments: 4
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/130707660_150899276813691_6827662259083378785_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=rxrjHl1nFcoAX9CztC0&tp=1&oh=50a72ad8c6952fba226893b10344787d&oe=5FFFD531 ',
        likes: 7,
        comments: 10
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/104124263_589780085294020_3407555347272031408_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=HYVjf54DUWsAX85ZeDI&tp=1&oh=676c8b09ede08f49a84ba39e624dd747&oe=6025FAD6',
        likes: 95,
        comments: 45
    },
    {
        image_path: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/39165054_1833981680013262_7339407223992352768_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=_y3i7c9WN-IAX-BEbxg&tp=1&oh=da57c7f56e3e20d8f2e1e049728bf04e&oe=6025FC9A',
        likes: 91,
        comments: 62
    }
]

const container = document.querySelector('.container')
container.innerHTML = POSTS.map(post => `
    <div class="post">
        <img class="post_image" src="${post.image_path}" alt="">
    </div>
`).join('')

const createOverlay = (idx) => {
    const overlay = document.createElement('div')
    overlay.className = 'post_overlay'
    overlay.innerHTML = `
        <div>❤${POSTS[idx].likes} 🗨${POSTS[idx].comments}</div>
    `
    return overlay
}

const posts = document.querySelectorAll('.post')
posts.forEach((post,idx) => {
    const overlay = createOverlay(idx)
    post.addEventListener('mouseover', (e)=>{
        // console.log(e.target)
        post.appendChild(overlay)
    })
    post.addEventListener('mouseleave', (e)=>{
        post.removeChild(overlay)
    })
})