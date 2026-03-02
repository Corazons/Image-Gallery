export default function Card({img}) {
    return (
            <div
              key={img.id}
              className="bg-white shadow overflow-hidden card">
              <img
                src={img.urls.small}
                alt={img.alt_description}
                className="w-full h-full object-cover"/>
              <div className="content p-4">
                <h2 className="text-sm font-semibold text-gray-100 trunecate">
                  {img.alt_description || "Untitled"}
                </h2>
                <p className="text-xs text-gray-300 mt-1">
                  by {img.user.name}
                </p>
              </div>
            </div>
    );
}