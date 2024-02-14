// Big thanks to https://polyhaven.org/ for the resources

const link = (name, part) =>
  `https://dl.polyhaven.org/file/ph-assets/Textures/jpg/4k/${name}/${name}_${part}_4k.jpg`

export const externTextures = {
  fabric: {
    albedo: link('fabric_pattern_07', 'col_1'),
    normal: link('fabric_pattern_07', 'nor_gl'),
    arm: link('fabric_pattern_07', 'arm'),
  },
  rag: {
    albedo: link('fabric_pattern_05', 'col_01'),
    normal: link('fabric_pattern_05', 'nor_gl'),
    arm: link('fabric_pattern_05', 'arm'),
  },
  bricks: {
    albedo: link('random_bricks_thick', 'diff'),
    normal: link('random_bricks_thick', 'nor_gl'),
    displacement: link('random_bricks_thick', 'disp'),
    arm: link('random_bricks_thick', 'arm'),
  },
  denim: {
    albedo: link('denmin_fabric_02', 'diff'),
    normal: link('denmin_fabric_02', 'nor_gl'),
    arm: link('denmin_fabric_02', 'arm'),
  },
  plank: {
    albedo: link('brown_planks_07', 'diff'),
    normal: link('brown_planks_07', 'nor_gl'),
    displacement: link('brown_planks_07', 'disp'),
    arm: link('brown_planks_07', 'arm'),
  },
  rock: {
    albedo: link('aerial_rocks_02', 'diff'),
    normal: link('aerial_rocks_02', 'nor_gl'),
    displacement: link('aerial_rocks_02', 'disp'),
    arm: link('aerial_rocks_02', 'arm'),
  },
  wood: {
    albedo: link('wood_cabinet_worn_long', 'diff'),
    normal: link('wood_cabinet_worn_long', 'nor_gl'),
    displacement: link('wood_cabinet_worn_long', 'disp'),
    arm: link('wood_cabinet_worn_long', 'arm'),
  },
  leather: {
    albedo: link('brown_leather', 'albedo'),
    normal: link('brown_leather', 'nor_gl'),
    displacement: link('brown_leather', 'disp'),
    arm: link('brown_leather', 'arm'),
  },
  pebbles: {
    albedo: link('ganges_river_pebbles', 'diff'),
    normal: link('ganges_river_pebbles', 'nor_gl'),
    displacement: link('ganges_river_pebbles', 'disp'),
    arm: link('ganges_river_pebbles', 'arm'),
  },
  metal: {
    albedo: link('metal_plate', 'diff'),
    normal: link('metal_plate', 'nor_gl'),
    displacement: link('metal_plate', 'disp'),
    arm: link('metal_plate', 'arm'),
  },
}
