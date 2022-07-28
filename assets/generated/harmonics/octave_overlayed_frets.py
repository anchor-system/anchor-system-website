import pygame

pygame.init()

SCREEN_RATIO = 2/3

WINDOW_WIDTH = 1200
WINDOW_HEIGHT = WINDOW_WIDTH * SCREEN_RATIO

# THEME = "DARK"
THEME = "LIGHT"

BLACK = (0, 0, 0)
GRAY = (100, 100, 100)
WHITE = (255, 255, 255)

DISTINCT_COLORS = [
    (230, 25, 75),
    (60, 180, 75),
    (255, 225, 25),
    (0, 130, 200),
    (245, 130, 48),
    (145, 30, 180),
    (70, 240, 240),
    (240, 50, 230),
    (210, 245, 60),
    (250, 190, 212),
    (0, 128, 128),
    (220, 190, 255),
    (170, 110, 40),
    (255, 250, 200),
    (128, 0, 0),
    (170, 255, 195),
    (128, 128, 0),
    (255, 215, 180),
    (0, 0, 128),
    (128, 128, 128),
    (255, 255, 255),
    (0, 0, 0)
]


if THEME == "DARK":
    BACKGROUND_COLOR = BLACK
    FRET_COLOR = WHITE
else:
    FRET_COLOR = BLACK
    BACKGROUND_COLOR = GRAY


SCREEN = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))

BASE_STRINGS = [(4 + i * 5) % 12 for i in range(6)]

NUM_FRETS = 21

STRING_LENGTH = WINDOW_WIDTH * 0.90
REST_OF_SCREEN = WINDOW_WIDTH - STRING_LENGTH
PADDING = REST_OF_SCREEN / 2
STRING_LOC_Y = WINDOW_HEIGHT / 2

FRET_MARK_HEIGHT = STRING_LENGTH / 16


FRET_TEXT_OFFSET = FRET_MARK_HEIGHT


def draw_frets():
    current_string_length = STRING_LENGTH * 2 # so it spans the full screen


    for i in range(1, 12 + 1):

        fret_color = DISTINCT_COLORS[i]

        fret_position = current_string_length - current_string_length / (2 ** (i/12))

        draw_position = PADDING + fret_position

        pygame.draw.line(SCREEN, fret_color, (draw_position, STRING_LOC_Y), (draw_position, STRING_LOC_Y - FRET_MARK_HEIGHT))

        font = pygame.font.SysFont("latinmodernroman", 20)
        text = font.render(str(i + 1), True, fret_color)
        text_rect = text.get_rect(
            midbottom=(draw_position, STRING_LOC_Y - FRET_TEXT_OFFSET))
        SCREEN.blit(text, text_rect)


    current_string_length = STRING_LENGTH

    for i in range(1, 12 + 1):

        fret_color = DISTINCT_COLORS[i]

        fret_position = current_string_length - current_string_length / (2 ** (i/12))

        draw_position = PADDING + fret_position

        pygame.draw.line(SCREEN, fret_color, (draw_position, STRING_LOC_Y), (draw_position, STRING_LOC_Y + FRET_MARK_HEIGHT))

        font = pygame.font.SysFont("latinmodernroman", 20)
        text = font.render(str(i + 12), True, fret_color)
        text_rect = text.get_rect(
            midtop=(draw_position, STRING_LOC_Y + FRET_TEXT_OFFSET))
        SCREEN.blit(text, text_rect)

    # for i in range(12):
    #
    #     fret_length = current_string_length - current_string_length / (2 ** (1/12))
    #
    #     current_position += fret_length
    #
    #     pygame.draw.line(SCREEN, FRET_COLOR, (current_position, STRING_LOC_Y), (current_position, STRING_LOC_Y - FRET_MARK_HEIGHT))
    #
    #     font = pygame.font.SysFont("latinmodernroman", int(fret_length / 2))
    #     text = font.render(str(i + 1), True, FRET_COLOR)
    #     text_rect = text.get_rect(
    #         midbottom=(current_position, STRING_LOC_Y - FRET_TEXT_OFFSET))
    #     SCREEN.blit(text, text_rect)
    #
    #     current_string_length = current_string_length / (2 ** (1/12))
    #
    # current_position = PADDING
    #
    # current_string_length = STRING_LENGTH
    #
    # for i in range(12):
    #
    #     fret_length = current_string_length - current_string_length / (2 ** (1/12))
    #
    #     current_position += fret_length
    #
    #     pygame.draw.line(SCREEN, FRET_COLOR, (current_position, STRING_LOC_Y + FRET_MARK_HEIGHT), (current_position, STRING_LOC_Y))
    #
    #     font = pygame.font.SysFont("latinmodernroman", int(fret_length / 2))
    #     text = font.render(str(i + 1 + 12), True, FRET_COLOR)
    #     text_rect = text.get_rect(
    #         midtop=(current_position, STRING_LOC_Y + FRET_TEXT_OFFSET))
    #     SCREEN.blit(text, text_rect)
    #
    #     current_string_length = current_string_length / (2 ** (1/12))


def draw_watermark():

    watermark_message = "www.theanchorsystem.net"

    font = pygame.font.SysFont("latinmodernroman", int((WINDOW_WIDTH/2)/ len(watermark_message)))
    text = font.render(watermark_message, True, FRET_COLOR)
    text_rect = text.get_rect(
        center=(WINDOW_WIDTH - (text.get_width()/2 + PADDING),  text.get_height()/2 + PADDING)
    )
    SCREEN.blit(text, text_rect)

def draw():
    SCREEN.fill(BACKGROUND_COLOR)

    pygame.draw.line(SCREEN, BLACK, (PADDING, STRING_LOC_Y), (PADDING + STRING_LENGTH, STRING_LOC_Y))

    pygame.draw.line(SCREEN, BLACK, (PADDING, STRING_LOC_Y + 5), (PADDING, STRING_LOC_Y - 5) )
    pygame.draw.line(SCREEN, BLACK, (PADDING + STRING_LENGTH, STRING_LOC_Y + 5), (PADDING + STRING_LENGTH, STRING_LOC_Y - 5) )

    draw_frets()
    draw_watermark()

    pygame.display.flip()

draw()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False


pygame.image.save(SCREEN, "octave_overlayed_frets.png")
pygame.quit()
