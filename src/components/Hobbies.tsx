import { Camera, Mountain, Activity } from "lucide-react";
import { Section } from "./Section";
import { PhotoGallery } from "./PhotoLightbox";
import {
  galleryPhotos,
  hobbyGroups,
  hobbiesIntro,
} from "../data/hobbies";

const groupIcons = {
  Outdoors: Mountain,
  Sports: Activity,
  Photography: Camera,
} as const;

export function Hobbies() {
  const hasPhotos = galleryPhotos.length > 0;

  return (
    <Section
      id="life"
      title="Outside of work"
      subtitle="A bit of what I do when I'm away from the keyboard."
    >
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted">
        {hobbiesIntro}
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {hobbyGroups.map((group) => {
          const Icon = groupIcons[group.title as keyof typeof groupIcons] ?? Mountain;
          return (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="mb-3 flex items-center gap-2 text-text">
                <Icon size={20} className="text-accent" />
                <h3 className="font-display font-semibold">{group.title}</h3>
              </div>
              <ul className="space-y-2 text-sm leading-relaxed text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-14">
        <h3 className="font-display mb-2 text-lg font-semibold text-text">
          Photography
        </h3>
        <p className="mb-6 max-w-xl text-sm text-muted">
          A few shots from hikes, trips, and everyday moments. Click any photo to
          browse full size.
        </p>

        {hasPhotos ? (
          <PhotoGallery photos={galleryPhotos} />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-bg px-4 text-center"
              >
                <Camera
                  size={28}
                  className="mb-2 text-muted opacity-50"
                />
                <p className="text-xs text-muted">Slot {n}</p>
                <p className="mt-1 text-[10px] text-muted opacity-80">
                  Add to public/photos/
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
