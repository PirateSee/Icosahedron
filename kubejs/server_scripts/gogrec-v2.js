ServerEvents.recipes(e => {
    e.shapeless('create:sequenced_gearshift', ['create:brass_casing','kubejs:logic_circuit','create:cogwheel','create:large_cogwheel','#ico:tool/screwdriver']).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:sequenced_gearshift')
    e.remove({id:'create:crafting/kinetics/sequenced_gearshift'})
    e.shaped('create:rotation_speed_controller', [
        'ps', 
        'bc'
    ], {
        p: 'create:precision_mechanism',
        s: '#ico:tool/screwdriver',
        b: 'create:brass_casing',
        c: 'kubejs:logic_circuit'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:rotation_speed_controller')
    e.remove({id:'create:crafting/kinetics/rotation_speed_controller'})
    e.shaped('2x create:track_station', [
        'as', 
        't '
    ], {
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing',
        a: 'kubejs:aquatrine'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_station')
    e.remove({id:'create:crafting/kinetics/track_station'})
    e.shaped('create:track_signal', [
        'cs', 
        'b '
    ], {
        c: 'kubejs:logic_circuit',
        s: '#ico:tool/screwdriver',
        b: 'create:railway_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_signal')
    e.remove({id:'create:crafting/kinetics/track_signal'})
    e.shaped('create:track_observer', [
        'ws', 
        'o ',
        't '
    ], {
        w: '#minecraft:wooden_pressure_plates',
        o: 'minecraft:observer',
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:track_observer')
    e.remove({id:'create:crafting/kinetics/track_observer'})
    e.remove({id:'create:crafting/kinetics/track_observer_from_other_plates'})
    e.shaped('create:controls', [
        'ls', 
        't ',
        'p '
    ], {
        s: '#ico:tool/screwdriver',
        t: 'create:railway_casing',
        p: 'create:precision_mechanism',
        l: 'minecraft:lever'
    }).damageIngredient(Item.of('#ico:tool/screwdriver')).id('ico:train_controls')
    e.remove({id:'create:crafting/kinetics/controls'})
})