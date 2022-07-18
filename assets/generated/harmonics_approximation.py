import math
import pygame

harmonics = [2, 3, 5, 7, 11]

for n in harmonics:
    s = f"Harmonic multiple: {n}, Distance is given by: round(math.log(n, 2) * 12) % 12 = {round(math.log(n, 2) * 12) % 12} "
    print(s)

print(pygame.font.get_fonts())