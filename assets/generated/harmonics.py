import pygame
import random

pygame.init()

SCREEN_RATIO = 2/3

WINDOW_WIDTH = 1200
WINDOW_HEIGHT = WINDOW_WIDTH * SCREEN_RATIO

BLACK = (0, 0, 0)
GRAY = (100, 100, 100)
WHITE = (255, 255, 255)

BACKGROUND_COLOR = WHITE

SCREEN = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))

BASE_STRINGS = [(4 + i * 5) % 12 for i in range(6)]

STRING_LENGTH = WINDOW_WIDTH * 0.90
REST_OF_SCREEN = WINDOW_WIDTH - STRING_LENGTH
PADDING = REST_OF_SCREEN / 2
STRING_LOC_Y = WINDOW_HEIGHT / 2
MARK_HEIGHT = STRING_LENGTH / 15
TEXT_OFFSET = MARK_HEIGHT / 2

HARMONICS = [2, 3, 5, 7]


def draw_grid():

    SCREEN.fill(BACKGROUND_COLOR)

    pygame.draw.line(SCREEN, GRAY, (PADDING, STRING_LOC_Y), (PADDING + STRING_LENGTH, STRING_LOC_Y))

    for j, harmonic in enumerate(HARMONICS):

        COLOR = [random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)]

        for i in range(1, harmonic):
            string_percentage = i / harmonic
            real_position = PADDING + string_percentage * STRING_LENGTH
            harmonic_scale_factor = 1 / harmonic
            enumerate_scale_factor = 1 / (j + 1)
            pygame.draw.line(SCREEN, COLOR, (real_position, STRING_LOC_Y + MARK_HEIGHT * harmonic_scale_factor),
                             (real_position, STRING_LOC_Y - MARK_HEIGHT * harmonic_scale_factor))

            # draw text
            font = pygame.font.SysFont("latinmodernroman", round(100 * enumerate_scale_factor))
            text = font.render(str(harmonic), True, COLOR)
            text_rect = text.get_rect(
                center=(real_position, STRING_LOC_Y + ((-1) ** (j % 2)) * (MARK_HEIGHT * harmonic_scale_factor + TEXT_OFFSET)))
            SCREEN.blit(text, text_rect)

    pygame.display.flip()


draw_grid()
pygame.image.save(SCREEN, "harmonics.png")
