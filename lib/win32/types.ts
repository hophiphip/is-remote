const ref = require('ref-napi');

const types = {
    REGSAM:    ref.types.ulong,
    DWORD:     ref.types.uint32,
    ULONG:     ref.types.ulong,
    HWND:      ref.refType(ref.types.void),
    BYTE:      ref.types.uint8,
    HKEY:      ref.refType(ref.types.void),
    PVOID:     ref.refType('pointer'),
    HANDLE:    ref.refType(ref.types.void),
    HINSTANCE: ref.refType(ref.types.void),
    LPCTSTR:   ref.refType(ref.types.CString),
    STRING:    ref.types.CString,
    INT:       ref.types.int,
    LPVOID:    ref.refType(ref.types.void),
};
  
(types as any).PHKEY   = ref.refType(types.HKEY);
(types as any).LPBYTE  = ref.refType(types.BYTE);
(types as any).LPDWORD = ref.refType(types.DWORD);
  
module.exports = types;
  