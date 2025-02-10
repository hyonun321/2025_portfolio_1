interface RoleSectionProps {
  roles: string[];
}

export function RoleSection({ roles }: RoleSectionProps) {
  return (
    <div className="content-card backdrop-blur-md w-full bg-white/10 rounded-xl p-6">
      <h3 className="text-4xl font-bold text-white mb-4 flex items-center">
        <span className="text-green-400 mr-2">역할</span>
      </h3>
      <ul className="text-gray-200 text-2xl space-y-2">
        {roles.map((role, index) => (
          <li key={index}>• {role}</li>
        ))}
      </ul>
    </div>
  );
}
