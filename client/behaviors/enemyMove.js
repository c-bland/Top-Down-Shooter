behaviorsObj.prototype.enemyMove = function (State, enemy) {
    enemy.body.collideWorldBounds = true;
    enemy.body.velocity.x = 0;
    enemy.body.velocity.y = 0;
    
    if (State.player.alive && game.physics.arcade.distanceBetween(State.player, enemy) <= 100) {
        enemy.rotation = State.game.physics.arcade.angleToXY(enemy, State.player.x, State.player.y);
        console.log('HERE');
        enemy.animations.play('melee');
    }
    State.game.physics.arcade.moveToObject(enemy, State.player, enemy.MOVE_SPEED);
    enemy.animations.play('move');
};