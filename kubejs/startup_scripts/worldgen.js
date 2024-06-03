//bruh they haven't implemented this yet

/*WorldgenEvents.add( e => {

    e.addOre(ore => {
        ore.id = 'ico:native_iron'
        ore.biomes = '#forge:overworld/in'
        ore.addTarget('#minecraft:stone_ore_replaceables', 'minecraft:iron_ore')
        ore.addTarget('#minecraft:deepslate_ore_replaceables', 'minecraft:deepslate_iron_ore')

        ore.chance([4,10])
            .squared()
            .triangleHeight(-8,112)
        ore.size(3)
        ore.worldgenLayer = 'underground_ores'
    })

    e.addOre(ore => {
        ore.id = 'ico:limonite_patch'
        ore.biomes = '#forge:overworld/in'
        ore.addTarget('#minecraft:stone_ore_replaceables', 'kubejs:limonite_ore')
        ore.addTarget('#minecraft:deepslate_ore_replaceables', 'kubejs:limonite_ore')

        ore.chance([6,8])
            .squared()
            .triangleHeight(-64,64)
        ore.size(16)
        ore.worldgenLayer = 'underground_ores'
    })
})

WorldgenEvents.remove( e => {
    e.removeFeatureById('underground_ores', ['minecraft:ore_iron', 'minecraft:ore_iron_small'])
})*/