import pygame
import random

pygame.init()

SCREEN_RATIO = 2/3

WINDOW_WIDTH = 1200 * 3
WINDOW_HEIGHT = WINDOW_WIDTH * SCREEN_RATIO

BLACK = (0, 0, 0)
GRAY = (100, 100, 100)
WHITE = (255, 255, 255)

BACKGROUND_COLOR = BLACK

SCREEN = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))

BASE_STRINGS = [(4 + i * 5) % 12 for i in range(6)]

HARMONICS = [2, 3, 5, 7]

NUM_FRETS = 21

STRING_LENGTH = WINDOW_WIDTH * 0.90
REST_OF_SCREEN = WINDOW_WIDTH - STRING_LENGTH
PADDING = REST_OF_SCREEN / 2
STRING_LOC_Y = WINDOW_HEIGHT / 2

HARMONIC_MARK_HEIGHT = STRING_LENGTH / 3
FRET_MARK_HEIGHT = HARMONIC_MARK_HEIGHT / (max(HARMONICS) * 2)

HARMONIC_TEXT_OFFSET = HARMONIC_MARK_HEIGHT / 1.5
FRET_TEXT_OFFSET = FRET_MARK_HEIGHT

FRET_COLOR = WHITE


def draw_frets():
    current_string_length = STRING_LENGTH
    current_position = PADDING

    for i in range(NUM_FRETS):

        fret_length = current_string_length - current_string_length / (2 ** (1/12))

        current_position += fret_length

        pygame.draw.line(SCREEN, FRET_COLOR, (current_position, STRING_LOC_Y + FRET_MARK_HEIGHT), (current_position, STRING_LOC_Y - FRET_MARK_HEIGHT))

        font = pygame.font.SysFont("latinmodernroman", int(fret_length / 2))
        text = font.render(str(i + 1), True, FRET_COLOR)
        text_rect = text.get_rect(
            midbottom=(current_position, STRING_LOC_Y - FRET_TEXT_OFFSET))
        SCREEN.blit(text, text_rect)

        current_string_length = current_string_length / (2 ** (1/12))


def draw_watermark():

    watermark_message = "www.theanchorsystem.net"

    font = pygame.font.SysFont("latinmodernroman", int((WINDOW_WIDTH/2)/ len(watermark_message)))
    text = font.render(watermark_message, True, FRET_COLOR)
    text_rect = text.get_rect(
        center=(WINDOW_WIDTH - (text.get_width()/2 + PADDING),  text.get_height()/2 + PADDING)
    )
    SCREEN.blit(text, text_rect)


def draw_harmonics():

    pygame.draw.line(SCREEN, GRAY, (PADDING, STRING_LOC_Y), (PADDING + STRING_LENGTH, STRING_LOC_Y))

    for j, harmonic in enumerate(HARMONICS):

        COLOR = [random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)]

        for i in range(1, harmonic):
            string_percentage = i / harmonic
            real_position = PADDING + string_percentage * STRING_LENGTH
            harmonic_scale_factor = 1 / harmonic
            enumerate_scale_factor = 1 / (j + 1)
            pygame.draw.line(SCREEN, COLOR, (real_position, STRING_LOC_Y + HARMONIC_MARK_HEIGHT * harmonic_scale_factor),
                             (real_position, STRING_LOC_Y - HARMONIC_MARK_HEIGHT * harmonic_scale_factor))

            font = pygame.font.SysFont("latinmodernroman", round(100 * enumerate_scale_factor))
            text = font.render(str(harmonic), True, COLOR)
            text_rect = text.get_rect(
                center=(real_position, STRING_LOC_Y + ((-1) ** (j % 2)) * ((HARMONIC_MARK_HEIGHT + HARMONIC_TEXT_OFFSET) * harmonic_scale_factor)))
            SCREEN.blit(text, text_rect)


def draw():
    SCREEN.fill(BACKGROUND_COLOR)

    draw_frets()
    draw_harmonics()
    draw_watermark()

    pygame.display.flip()

draw()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False


pygame.image.save(SCREEN, "harmonics.png")
pygame.quit()
