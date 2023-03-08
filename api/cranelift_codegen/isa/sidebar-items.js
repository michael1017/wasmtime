window.SIDEBAR_ITEMS = {"constant":[["ALL_ARCHITECTURES","The string names of all the supported, but possibly not enabled, architectures. The elements of this slice are suitable to be passed to the [lookup_by_name] function to obtain the default configuration for that architecture."]],"enum":[["CallConv","Calling convention identifiers."],["LookupError","Describes reason for target lookup failure"]],"fn":[["lookup","Look for an ISA for the given `triple`. Return a builder that can create a corresponding `TargetIsa`."],["lookup_by_name","Look for a supported ISA with the given `name`. Return a builder that can create a corresponding `TargetIsa`."]],"mod":[["aarch64","ARM 64-bit Instruction Set Architecture."],["riscv64","risc-v 64-bit Instruction Set Architecture."],["unwind","Represents information relating to function unwinding."],["x64","X86_64-bit Instruction Set Architecture."]],"struct":[["IsaBuilder","Builder for a `TargetIsa`. Modify the ISA-specific settings before creating the `TargetIsa` trait object with `finish`."],["TargetFrontendConfig","This struct provides information that a frontend may need to know about a target to produce Cranelift IR for the target."]],"trait":[["TargetIsa","Methods that are specialized to a target ISA."]],"type":[["Builder","Type alias of `IsaBuilder` used for building Cranelift’s ISAs."],["Legalize","After determining that an instruction doesn’t have an encoding, how should we proceed to legalize it?"],["OwnedTargetIsa","The type of a polymorphic TargetISA object which is ’static."]]};