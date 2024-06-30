/*ServerEvents.commandRegistry( e => {

    const { commands: Commands } = e;
    
    let mat_metal = [
        'iron',
        'copper',
        'gold',
        'netherite',
        'carbon_steel',
        'wrought_iron'
    ]

    let mat_wood = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'dark_oak',
        'crimson',
        'warped'
    ]

    let mat_stone = [
        'stone',
        'blackstone',
        'obsidian',
        'granite',
        'flint',
        'diorite',
        'andesite'
    ]

    let mat_rod = [
        'stick',
        'blaze_rod',
        'end_rod',
        'bamboo',
        'dark_rod',
        'bone_handle',
        'forged_beam'
    ]

    let mat_wrap = [ //fiber, skin
        'leather',
        'string',
        'hide',
        'vine',
        'twisting_vine',
        'weeping_vine',
        'dragon_sinew'
    ]

    let mat_gem = [
        'diamond',
        'emerald',
        'amethyst'
    ]

    let mat_bone = [
        'bone'
    ]

    let mat_shell = [
        'scute',
        'shulker_shell'
    ]

    let mat_socket = [
        'ender_pearl',
        'nether_star',
        'pristine_amethyst',
        'pristine_diamond',
        'pristine_lapis',
        'pristine_emerald'
    ].concat(mat_gem)

    let blade_modules = [
        ['heavy_blade', mat_metal.concat(mat_stone).concat(mat_wood)],
        ['short_blade', mat_metal.concat(mat_stone).concat(mat_wood).concat(mat_gem).concat(mat_bone)],
        ['machete', mat_metal.concat(mat_stone).concat(mat_wood).concat(mat_gem).concat(mat_bone)],
        ['basic_blade', mat_metal.concat(mat_stone).concat(mat_wood).concat(mat_gem).concat(mat_bone)]
    ]

    let pommel_modules = [
        ['decorative_pommel', mat_metal.concat(mat_stone).concat(mat_gem)],
        ['counterweight', mat_metal.concat(mat_stone).concat(mat_wrap).concat(mat_bone)],
        ['grip_loop', mat_metal.concat(mat_wrap).concat(mat_bone)],
        ['none', ['none']]
    ]

    let guard_modules = [
        ['makeshift_guard', mat_metal.concat(mat_stone).concat(mat_gem)],
        ['wide_guard', mat_metal.concat(mat_stone).concat(mat_gem).concat(mat_shell).concat(mat_bone)],
        ['binding', mat_wrap],
        ['forefinger_ring', mat_metal.concat(mat_wood).concat(mat_bone)],
        ['socket', mat_socket],
        ['none', ['none']]
    ]

    let fuller_modules = [
        ['reinforced_fuller', mat_metal.concat(mat_bone).concat(mat_wood)],
        ['none', ['none']],
        ['none_', ['none']]
    ]

    function randArray(array) {
        return array[Math.floor(Math.random()*array.length)];
    }

    function generateUUID() { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if(d > 0){//Use timestamp until depleted
                r = (d + r)%16 | 0;
                d = Math.floor(d/16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r)%16 | 0;
                d2 = Math.floor(d2/16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    function grantRandomTool(player) {

        console.log("generating tool... v2")

        let blade_mod = blade_modules[Math.floor(Math.random()*blade_modules.length)];
        let blade_mat = randArray(blade_mod[1])
        blade_mod = blade_mod[0]

        let hilt_mat = randArray(mat_metal.concat(mat_bone).concat(mat_wood).concat(mat_rod))

        let pommel_mod = pommel_modules[Math.floor(Math.random()*pommel_modules.length)]
        let pommel_mat = randArray(pommel_mod[1])
        pommel_mod = pommel_mod[0]
        
        let guard_mod = guard_modules[Math.floor(Math.random()*guard_modules.length)]
        let guard_mat = randArray(guard_mod[1])
        guard_mod = guard_mod[0]
        let guard_mod_matname = guard_mod

        if (guard_mod == 'binding') {
            guard_mod_matname = 'sword_binding'
        }

        if (guard_mod == 'socket') {
            guard_mod_matname = 'sword_socket'
            guard_mat = "socket_" + guard_mat
        }

        let fuller_mod = fuller_modules[Math.floor(Math.random()*fuller_modules.length)]
        let fuller_mat = randArray(fuller_mod[1])
        fuller_mod = fuller_mod[0]

        console.log("vars defined")

        let nbt = '{Damage:0,HideFlags:1,' +
        'honing_progress:' + (Math.floor(Math.random() * 100) + 110) + ',' + 
        'id:"' + generateUUID() + '",' +
        '"sword/blade":"sword/' + blade_mod + '",' + 
        '"sword/' + blade_mod +'_material":"' + blade_mod + '/' + blade_mat + '",' +
        '"sword/hilt":"sword/basic_hilt",' +
        '"sword/basic_hilt_material":"basic_hilt/' + hilt_mat + '",' +
        '"sword/pommel":"sword/' + pommel_mod + '",' +
        '"sword/' + pommel_mod + '_material":"' + pommel_mod + '/' + pommel_mat + '",' +
        '"sword/guard":"sword/' + guard_mod + '",' +
        '"sword/' + guard_mod + '_material":"' + guard_mod_matname + '/' + guard_mat + '",' +
        '"sword/fuller":"sword/' + fuller_mod + '",' +
        '"sword/' + fuller_mod + '_material":"' + fuller_mod + '/' + fuller_mat + '"}'

        console.log(nbt)

        player.give(Item.of('tetra:modular_sword', nbt))

        return
    }

    function test(player) {
        console.log("testing...")

        let testvar = 'hello'

        console.log("sucess")
        return
    }

    e.register(
        //Commands.literal("generatetool").executes(ctx => grantRandomTool(ctx.source.player))
    )

})*/