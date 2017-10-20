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
        ]
    }
}
