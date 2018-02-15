

(function() {
    function Driver(driver, trip, miles, mph, correct) {
        this.driver = driver;
        this.trip = trip;
        this.miles = miles;
        this.mph = mph;

    }

    Question.prototype.displayQuestion = function() {
        console.log(this.Driver);

        for (var i = 0; i < this.miles.length; i++) {
            console.log(i + ': ' + this.miles[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----');
    }
    
    
    var q1 = new Driver(" What's the stat for Dan?"),
                          ["Dan 715 173 mph", "Dan 212 100",],
                          (0);

    var q2 = new Driver(" What's the stat for Alex?"),
                          ["Alex 400 200" ,"Alex 612 218"],
                          (1);

    var q3 = new Driver(" What's the stat for Bob?"),
                         [" Bob 200 1200", "Bob nine four", "Bob 1201 420"],
                          (2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    function nextDriver() {

        var n = Math.floor(Math.random() * drivers.length);
        drivers[n].displayDriver();

        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            driver[n].checkMile(parseInt(miles), keepScore);
            
            nextDriver();
        }
    }
    
    nextDriver();




