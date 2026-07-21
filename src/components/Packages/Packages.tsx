import PackageColumn from "./PackageColumn";

import { packages } from "@/data/packages";

const Packages: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
                <PackageColumn key={pkg.name} tier={pkg} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Packages
