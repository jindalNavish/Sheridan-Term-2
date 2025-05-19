from PIL import Image, ImageDraw
import random

# Create a blank canvas in RGBA mode
size = 400
img = Image.new("RGBA", (size, size), (255, 255, 255, 0))
draw = ImageDraw.Draw(img)

# Define center and radius for emoji face
center = (size // 2, size // 2)
radius = 150
bbox = (center[0] - radius, center[1] - radius, center[0] + radius, center[1] + radius)

# Create a circular mask
mask = Image.new("L", (size, size), 0)
mask_draw = ImageDraw.Draw(mask)
mask_draw.ellipse(bbox, fill=255)

# Draw left half (pastel)
pastel_color = (255, 182, 193)
draw.pieslice(bbox, start=90, end=270, fill=pastel_color)

# Draw right half (glitchy neon lines)
for x in range(center[0], center[0] + radius):
    color = (0, random.randint(200, 255), 255)
    y1 = center[1] - int((radius**2 - (x - center[0])**2)**0.5)
    y2 = center[1] + int((radius**2 - (x - center[0])**2)**0.5)
    draw.line([(x, y1), (x, y2)], fill=color)

# Draw emoji border
draw.ellipse(bbox, outline="black", width=4)

# Draw left eye (smooth circle)
eye_radius = 15
left_eye_center = (center[0] - 50, center[1] - 40)
draw.ellipse([left_eye_center[0] - eye_radius, left_eye_center[1] - eye_radius,
              left_eye_center[0] + eye_radius, left_eye_center[1] + eye_radius],
             fill="black")

# Draw right eye (pixelated glitch)
right_eye_top_left = (center[0] + 20, center[1] - 50)
right_eye_bottom_right = (center[0] + 50, center[1] - 20)
for _ in range(30):
    rx = random.randint(right_eye_top_left[0], right_eye_bottom_right[0])
    ry = random.randint(right_eye_top_left[1], right_eye_bottom_right[1])
    draw.rectangle((rx, ry, rx + 3, ry + 3), fill="black")

# Draw smile (arc only on left side)
smile_box = [center[0] - 90, center[1] - 10, center[0] + 10, center[1] + 60]
draw.arc(smile_box, start=20, end=160, fill="black", width=3)

# Apply the circular mask
img.putalpha(mask)

# Save and show
img.save("rebel_wmoji.png")
img.show()
