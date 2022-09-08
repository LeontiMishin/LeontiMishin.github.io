var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snake_timer;
var food_timer;
var score = 0;

function init() {
    prepareGameField();

    var wrap = document.getElementsByClassName('wrap')[0];

    wrap.style.width = '400px';
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);
}

function prepareGameField() {
    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    for (var i = 0; i < FIELD_SIZE_X; i++) {
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++){
            var cell = document.createElement('td')
            cell.className = 'game-table-cell' + i + '-' + j;

            row.appendChild(cell);
        }
        game_table.appendChild(row)
    }
    document.geyElementById('snake-field').appendChild(game_table);
}

function startGame(){
    gameIsRunning = true;
    respawn();

    snake_timer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, 5000)
}

function respawn(){
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2)
    var start_coord_y = Math.floor(FIELD_SIZE_Y / 2)

    var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + 'snake-unit');

    var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + 'snake-unit')

    snake.push(snake_head);
    snake.push(snake_tail);
}

function move(){
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split('');

    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);

    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    }
    else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    }
    else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    }
    else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    }

    if (!isSnakeUnit(new_unit) && new_unit !== undefined) {
        new_unit.setAttribute('class', new_unit.getAttribute('class') + 'snake-unit');
        snake.push(new_unit);

        if (!haveFood(new_unit)) {
            var removed = snake.splice(0,1)[0];
            var classes = removed.getAttribute('class').split('');

            removed.setAttribute('class', classes[0]+ '' + classes[1]);
        }
    }
    else {
        finishTheGame();
    }
}