ServerEvents.recipes(e => {
    //tools

    e.shaped('kubejs:simple_file', [
        'A', 
        'A',
        'T'  
    ], {
        T: 'kubejs:tool_handle',
        A: 'create:andesite_alloy'
    }).id('ico:tool_simple_file')

    e.shaped('kubejs:simple_saw', [
        ' ST', 
        'SA ',
        'A  '  
    ], {
        T: 'kubejs:tool_handle',
        A: 'create:andesite_alloy',
        S: '#forge:rods/wooden'
    }).id('ico:tool_simple_saw')

    e.shaped('kubejs:simple_hammer', [
        ' AI', 
        ' SA',
        'T  '  
    ], {
        T: 'kubejs:tool_handle',
        A: 'create:andesite_alloy',
        S: '#forge:rods/wooden',
        I: 'minecraft:iron_nugget'
    }).id('ico:tool_simple_hammer')
    
    e.shaped('kubejs:simple_screwdriver', [
        'I', 
        'A',
        'T'  
    ], {
        T: 'kubejs:tool_handle',
        A: 'create:andesite_alloy',
        I: 'minecraft:iron_nugget'
    }).id('ico:tool_simple_screwdriver')

    e.shaped('kubejs:tool_handle', [ 
        ' W',
        'S '  
    ], {
        W: '#forge:stripped_logs',
        S: '#forge:rods/wooden'
    }).id('ico:tool_handle')
  
    e.shapeless('kubejs:simple_multitool', ['kubejs:tool_handle', 'kubejs:simple_hammer', 'kubejs:simple_screwdriver', 'kubejs:simple_file', 'kubejs:simple_saw', 'create:iron_sheet']).id('ico:tool_simple_multitool')
	
	e.recipes.createMilling('kubejs:andesite_alloy_dust', 'create:andesite_alloy')
})