import React, { useState } from "react";
import { Card, Image, Text, Group, Button, Stack } from "@mantine/core";

// Example single-file React component using Mantine
// - Shows a title and description
// - Image is displayed *below* the text
// - Clicking/tapping the image switches between provided images
// - Accepts props: images (array of urls), title, description

export default function ImageSwitcherCard({
  images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
  ],
  title = "Mantine Image Card",
  description = "Click the image to change it",
}) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleImageClick = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  return (
    <Card shadow="sm" radius="md" p="md" className="max-w-sm mx-auto">
      <Stack spacing="xs">
        <div>
          <Text weight={700} size="lg">
            {title}
          </Text>
          <Text size="sm" color="dimmed">
            {description}
          </Text>
        </div>

        {/* Image is placed below the text */}
        <div className="rounded-md overflow-hidden border">
          <Image
            src={images[index]}
            alt={`image-${index}`}
            height={220}
            fit="cover"
            style={{ cursor: "pointer", transition: "transform 200ms ease" }}
            onClick={handleImageClick}
            withPlaceholder
          />
        </div>

        <Group position="apart">
          <Text size="xs" color="dimmed">
            Image {index + 1} of {images.length}
          </Text>

          <Button
            variant="light"
            size="xs"
            onClick={() => setIndex((i) => (i + 1) % images.length)}
          >
            Next
          </Button>
        </Group>
      </Stack>
    </Card>
  );
}
