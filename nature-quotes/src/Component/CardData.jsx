const cardData = [
    {
        imgscr:"./images/img1.jpg",
        text:`If you wish to know the divine, feel the wind on your face and the warm sun on your hand.”`,
        person:"-Buddha"
    },

    {
        imgscr:"./images/img2.jpg",
        text:`“Keep close to Nature's heart… and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.”`,
        person:"-John Muir"
    },
    
    {
        imgscr:"./images/img3.jpg",
        text:`Everything in nature invites us constantly to be what we are. We are often like rivers: careless and forceful, timid and dangerous, lucid and muddied, eddying, gleaming, still.`,
        person:"― Gretel Ehrlich"
    },

    {
        imgscr:"./images/img6.jpg",
        text:` In the presence of nature, a wild delight runs through the man, in spite of real sorrows. Nature says, — he is my creature, and maugre all his impertinent griefs, he shall be glad with me`,
        person:"― Ralph Waldo Emerson"
    },

    {
        imgscr:"./images/img5.jpg",
        text:`Nature is my manifestation of God. I go to nature every day for inspiration in the day's work. I follow in building the principles which nature has used in its domain`,
        person:"-Frank Lloyd Wright"
    },

    {
        imgscr:"./images/img4.jpg",
        text:`In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful`,
        person:"-Alice Walker"
    },
    {
        imgscr:"./images/img7.jpg",
        text:` And forget not that the earth delights to feel your bare feet and the winds long to play with your hair`,
        person:"-Khalil Gibran"
    },
    {
        imgscr:"./images/img8.jpg",
        text:`I believe the best way to begin reconnecting humanity's heart, mind, and soul to nature is for us to share our individual stories`,
        person:"― J. Drew Lanham"
    },
    {
        imgscr:"./images/img9.jpg",
        text:`Love the world as your own self; then you can truly care for all things.`,
        person:"- Lao Tzu"
    },
    {
        imgscr:"./images/img10.jpg",
        text:`Our task must be to free ourselves… by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty`,
        person:"― Albert Einstein"
    },
    {
        imgscr:"./images/img11.jpg",
        text:`In the depth of winter, I finally learned that there was in me an invincible summer.`,
        person:"- Albert Camus"
    },
    {
        imgscr:"./images/img12.jpg",
        text:` I think nature's imagination is so much greater than man's, she's never going to let us relax.`,
        person:"- Richard Feynman"
    },

    {
        imgscr:"./images/img13.jpg",
        text:`Some of nature's most exquisite handiwork is on a miniature scale, as anyone knows who has applied a magnifying glass to a snowflake.`,
        person:"- Rachel Carson"
    },
    {
        imgscr:"./images/img14.jpg",
        text:`In nature, light creates the color. In the picture, color creates the light`,
        person:"- Hans Hofmann"
    },
    {
        imgscr:"./images/img15.jpg",
        text:`he early bird gets the worm, the second mouse gets the cheese.`,
        person:" "
    },
    {
        imgscr:"./images/img16.jpg",
        text:`"Look deep into nature and then you will understand everything better”, “To walk in nature is to witness a thousand miracles”, “The Earth laughs in flowers”, and “Nature is the art of God."`,
        person:" "
    },
    {
        imgscr:"./images/img17.jpg",
        text:`“Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.”`,
        person:"-Langston Hughes"
    },
    {
        imgscr:"./images/img18.jpg",
        text:`"Just living is not enough. One must have sunshine, freedom, and a little flower."`,
        person:"-Hans Christian Andersen"
    },
    {
        imgscr:"./images/img19.jpg",
        text:`"My wish is to stay always like this, living quietly in a corner of nature."`,
        person:"Claude Monet"
    },
    {
        imgscr:"./images/img20.jpg",
        text:`"To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug."`,
        person:"Helen Keller"
    },
    {
        imgscr:"./images/img21.jpg",
        text:`. Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby`,
        person:"― Langston Hughes"
    },
    {
        imgscr:"./images/img22.jpg",
        text:`"I think having land and not ruining it is the most beautiful art that anybody could ever want."`,
        person:"-Andy Warhol"
    },
    {
        imgscr:"./images/img23.jpg",
        text:`"To forget how to dig the earth and to tend the soil is to forget ourselves."`,
        person:"-Mahatma Gandhi"
    },
    {
        imgscr:"./images/img24.jpg",
        text:`"Being able to smell the fresh air and disconnect from the news and your phone—there's nothing like it."`,
        person:"Jason Ward"
    },
    {
        imgscr:"./images/img25.jpg",
        text:`Look deep into nature, and then you will understand everything better.`,
        person:"― Albert Einstein"
    },
    {
        imgscr:"./images/img26.jpg",
        text:` To me a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.`,
        person:"—Helen Keller"
    },
    {
        imgscr:"./images/img27.jpg",
        text:` Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.`,
        person:"—Henry David Thoreau"
    },
    {
        imgscr:"./images/img28.jpg",
        text:`There's a whole world out there, right outside your window. You'd be a fool to miss it.`,
        person:"—Charlotte Eriksson"
    },
    {
        imgscr:"./images/img29.jpg",
        text:`The sun, with all those planets revolving around it and dependent on it, can still ripen a bunch of grapes as if it had nothing else in the universe to do.`,
        person:"—Galileo Galilei"
    },
    {
        imgscr:"./images/img30.jpg",
        text:`The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature.`,
        person:"—Joseph Campbell"
    },
    {
        imgscr:"./images/img31.jpg",
        text:` Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.`,
        person:"—Langston Hughes"
    },
    {
        imgscr:"./images/img32.jpg",
        text:`Those who contemplate the beauty of the earth find reserves of strength that will endure as long as life lasts.`,
        person:"—Rachel Carson"
    },
    {
        imgscr:"./images/img33.jpg",
        text:`I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.`,
        person:"—Henry David Thoreau"
    },
    {
        imgscr:"./images/img34.jpg",
        text:`. Yosemite Valley, to me, is always a sunrise, a glitter of green and golden wonder in a vast edifice of stone and space.`,
        person:"—Ansel Adams"
    },
    {
        imgscr:"./images/img35.jpg",
        text:`Like music and art, love of nature is a common language that can transcend political or social boundaries.`,
        person:"—Jimmy Carter"
    },
    {
        imgscr:"./images/img36.jpg",
        text:`Some of nature's most exquisite handiwork is on a miniature scale, as anyone knows who has applied a magnifying glass to a snowflake.`,
        person:"—Rachel Carson"
    },
    {
        imgscr:"./images/img37.jpg",
        text:`My father considered a walk among the mountains as the equivalent of churchgoing.`,
        person:"—Aldous Huxley"
    },
    {
        imgscr:"./images/img38.jpg",
        text:`Everything in nature is lyrical in its ideal essence, tragic in its fate, and comic in its existence.`,
        person:"—George Santanaya"
    },
    {
        imgscr:"./images/img39.jpg",
        text:`Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.`,
        person:" —John Lubbock"
    },
    {
        imgscr:"./images/img40.jpg",
        text:`"Sometimes we can only find our true direction when we left the wind of change carry us."`,
        person:"Mimi Novic"
    },
    {
        imgscr:"./images/img41.jpg",
        text:`"If we surrendered to earth's intelligence we could rise up rooted, like trees."`,
        person:"Rainer Maria Rilke"
    },
    {
        imgscr:"./images/img42.jpg",
        text:`"You should sit in meditation for 20 minutes a day. Unless you're too busy, then you should sit for an hour."`,
        person:"Zen Saying"
    },
    {
        imgscr:"./images/img43.jpg",
        text:`“I think having land and not ruining it is the most beautiful art that anybody could ever want.”`,
        person:"Andy Warhol"
    },
    {
        imgscr:"./images/img44.jpg",
        text:`“Being able to smell the fresh air and disconnect from the news and your phone—there's nothing like it.”`,
        person:"Jason Ward"
    },
    {
        imgscr:"./images/img45.jpg",
        text:`"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth."`,
        person:"Henry David Thoreau"
    }
    
];
export default cardData;
