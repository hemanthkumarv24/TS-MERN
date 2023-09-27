from PIL import Image, ImageDraw, ImageFont

# Create a blank certificate image
width, height = 800, 600
certificate = Image.new('RGB', (width, height), 'white')

# Load a font
font = ImageFont.load_default()

# Create a drawing context
draw = ImageDraw.Draw(certificate)

# Certificate Title
title = "Certificate of Achievement"
title_font = ImageFont.truetype("arial.ttf", size=36)
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_height = title_bbox[3] - title_bbox[1]
draw.text(((width - title_width) / 2, 50), title, font=title_font, fill='black')

# Recipient's Name
recipient_name = "Gopala Krishna V"
recipient_font = ImageFont.truetype("arial.ttf", size=24)
recipient_bbox = draw.textbbox((0, 0), recipient_name, font=recipient_font)
recipient_width = recipient_bbox[2] - recipient_bbox[0]
recipient_height = recipient_bbox[3] - recipient_bbox[1]
draw.text(((width - recipient_width) / 2, 200), recipient_name, font=recipient_font, fill='black')

# Achievement Description
achievement = "For Outstanding Performance in All Activity"
achievement_font = ImageFont.truetype("arial.ttf", size=18)
achievement_bbox = draw.textbbox((0, 0), achievement, font=achievement_font)
achievement_width = achievement_bbox[2] - achievement_bbox[0]
achievement_height = achievement_bbox[3] - achievement_bbox[1]
draw.text(((width - achievement_width) / 2, 280), achievement, font=achievement_font, fill='black')

# Date
date = "Date: September 30, 2023"
date_font = ImageFont.truetype("arial.ttf", size=16)
date_bbox = draw.textbbox((0, 0), date, font=date_font)
date_width = date_bbox[2] - date_bbox[0]
date_height = date_bbox[3] - date_bbox[1]
draw.text(((width - date_width) / 2, 360), date, font=date_font, fill='black')

# Save the certificate
certificate.save("certificate.png")

# Display the certificate (optional)
certificate.show()
