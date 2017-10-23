export class MyCtrl {
    constructor($scope) {
        $scope.planets = [
            {
                title: 'Mercury',
                image:'https://upload.wikimedia.org/wikipedia/commons/b/b9/3D_Mercury.png',
                description: 'The closest planet to the sun, Mercury is only a bit larger than moon of Earth. Its day side is scorched by the sun and can reach 840 degrees Fahrenheit (450 Celsius), but on the night side, temperatures drop to hundreds of degrees below freezing. Mercury has virtually no atmosphere to absorb meteor impacts, so its surface is pockmarked with craters, just like the moon.',
                diameter: '3,031 miles (4,878 km)',
                orbit: '88 Earth days',
                day: '58.6 Earth days'
            },
            {
                title: 'Venus',
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neptune_cutout.png/776px-Neptune_cutout.png',
                description: 'The second planet from the sun, Venus is terribly hot, even hotter than Mercury. The atmosphere is toxic. The pressure at the surface would crush and kill you. Scientists describe Venus’ situation as a runaway greenhouse effect. Its size and structure are similar to Earth, Venus thick, toxic atmosphere traps heat in a runaway "greenhouse effect." Oddly, Venus spins slowly in the opposite direction of most planets.',
                diameter: '7,521 miles (12,104 km)',
                orbit: '225 Earth days',
                day: '241 Earth days'
            },
            {
                title: 'Earth',
                image:'http://www.pngall.com/wp-content/uploads/2016/06/Earth-PNG-Pic.png',
                description: 'The third planet from the sun, Earth is a waterworld, with two-thirds of the planet covered by ocean. It’s the only world known to harbor life. Earth atmosphere is rich in life-sustaining nitrogen and oxygen. Earth surface rotates about its axis at 1,532 feet per second (467 meters per second) — slightly more than 1,000 mph (1,600 kph) — at the equator. The planet zips around the sun at more than 18 miles per second (29 km per second).',
                diameter: '7,926 miles (12,760 km)',
                orbit: '365.24 days',
                day: '23 hours, 56 minutes'
            },
            {
                title: 'Mars',
                image:'http://shubinpavel.ru/images/mars.png',
                description: 'The fourth planet from the sun, is a cold, dusty place. The dust, an iron oxide, gives the planet its reddish cast. Mars shares similarities with Earth: It is rocky, has mountains and valleys, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms. It snows on Mars. And Mars harbors water ice. Scientists think it was once wet and warm, though today it’s cold and desert-like.',
                diameter: '4,217 miles (6,787 km)',
                orbit: '687 Earth days',
                day: 'Just more than one Earth day (24 hours, 37 minutes)'
            },
            {
                title: 'Jupiter',
                image:'http://www.pngmart.com/files/4/Jupiter-PNG-File.png',
                description: 'The fifth planet from the sun, Jupiter is huge and is the most massive planet in our solar system. It’s a mostly gaseous world, mostly hydrogen and helium. Its swirling clouds are colorful due to different types of trace gases. A big feature is the Great Red Spot, a giant storm which has raged for hundreds of years. Jupiter has a strong magnetic field, and with dozens of moons, it looks a bit like a miniature solar system.',
                diameter: '86,881 miles (139,822 km)',
                orbit: '11.9 Earth years',
                day: '9.8 Earth hours'
            },
            {
                title: 'Saturn',
                image:'https://upload.wikimedia.org/wikipedia/commons/4/43/Saturnx.png',
                description: 'The sixth planet from the sun is known most for its rings. When Galileo Galilei first studied Saturn in the early 1600s, he thought it was an object with three parts. Not knowing he was seeing a planet with rings, the stumped astronomer entered a small drawing — a symbol with one large circle and two smaller ones — in his notebook, as a noun in a sentence describing his discovery. More than 40 years later, Christiaan Huygens proposed that they were rings. The rings are made of ice and rock. Scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium. It has numerous moons.',
                diameter: '74,900 miles (120,500 km)',
                orbit: '29.5 Earth years',
                day: 'About 10.5 Earth hours'
            },
            {
                title: 'Uranus',
                image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Uranus2-transparent.png/768px-Uranus2-transparent.png',
                description: 'The seventh planet from the sun, Uranus is an oddball. It’s the only giant planet whose equator is nearly at right angles to its orbit — it basically orbits on its side. Astronomers think the planet collided with some other planet-size object long ago, causing the tilt. The tilt causes extreme seasons that last 20-plus years, and the sun beats down on one pole or the other for 84 Earth-years. Uranus is about the same size as Neptune. Methane in the atmosphere gives Uranus its blue-green tint. It has numerous moons and faint rings.',
                diameter: '31,763 miles (51,120 km)',
                orbit: '84 Earth years',
                day: '18 Earth hours'
            },
            {
                title: 'Neptune',
                image:'https://space-facts.com/wp-content/uploads/neptune-transparent-300x300.png',
                description: 'The eighth planet from the sun, Neptune is known for strong winds — sometimes faster than the speed of sound. Neptune is far out and cold. The planet is more than 30 times as far from the sun as Earth. It has a rocky core. Neptune was the first planet to be predicted to exist by using math, before it was detected. Irregularities in the orbit of Uranus led French astronomer Alexis Bouvard to suggest some other might be exerting a gravitational tug. German astronomer Johann Galle used calculations to help find Neptune in a telescope. Neptune is about 17 times as massive as Earth.',
                diameter: '30,775 miles (49,530 km)',
                orbit: '165 Earth years',
                day: '19 Earth hours'
            },
            {
                title: 'Pluto (Dwarf Planet)',
                image:'http://cosmos.agency/wp-content/uploads/2015/08/pluto_heart_colored.png',
                description: 'Once the ninth planet from the sun, Pluto is unlike other planets in many respects. It is smaller than Earth moon. Its orbit carries it inside the orbit of Neptune and then way out beyond that orbit. From 1979 until early 1999, Pluto had actually been the eighth planet from the sun. Then, on Feb. 11, 1999, it crossed Neptune path and once again became the solar system most distant planet — until it was demoted to dwarf planet status. Pluto will stay beyond Neptune for 228 years. ',
                diameter: '1,430 miles (2,301 km)',
                orbit: '248 Earth years',
                day: '6.4 Earth day'
            },
        ];
        $scope.isShowAllPlanets = false;
        $scope.isShowTheAnswerOfQuestionYes = false;
        $scope.isShowTheAnswerOfQuestionNo = false;
        $scope.isHideTheQuestion = false;
    }
}
